import firestore from "../firebase";

export const getProducts = async () => {
    // Specify the collection we are working with
    // CollectionReference
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
    const collectionRef = firestore.collection("products");
    // get records from that collection
    const data = await collectionRef.get(); // QuerySnapshot<T>
    // clean up our records
    const rawDocuments = data.docs; // Array<QueryDocumentSnapshot<T>>

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    return cleanedDocuments;
    // return our record
};

export const getProductById = async (id) => {
    //Get the Collection Ref
    const collectionRef = firestore.collection("products");

    //Get Document Reference
    const documentReference = collectionRef.doc(id);

    // Wait for the Query Snapshot
    const rawData = await documentReference.get(); // QuerySnapshot<T>

    return { id: rawData.id, ...rawData.data() };
};

export const updateProductStockById = async (id, stock) => {
    //Get the Collection Ref
    const collectionRef = firestore.collection("products");
    //Get Document Reference
    const documentReference = collectionRef.doc(id);

    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference
    await documentReference.update({ stock: stock - 1 });

    // return true after document has updated
    return true;
};
