import firestore from "../firebase";

export const getProducts = async () => {
    //Get the Collection Ref
    const collectionRef = firestore.collection("products");

    //Get All Documents From Collection
    const data = await collectionRef.get();

    //Clean up our records
    const rawDocuments = data.docs;

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    return cleanedDocuments;
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

    //Update Key Value Pair on Document
    await documentReference.update({ stock: stock - 1 });

    // Return true after document has been updated
    return true;
};
