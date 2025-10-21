if (!window.indexedDB) {
    alert("IndexDB no es compatible")
}
// Crear o abrir la base de datos
const request = indexedDB.open('baseDatos', 1);

// Crear o abrir un almacen de objetos
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStorage('miAlmacen', {keyPath: 'id', autoIncrement: true});
}
    request.onsuccess = function (event) {
        const db = event.target.result;
        
// Realizar una transacción de escritura
        const transaction = db.transaction('miAlmacen', 'readwrite');
    
    // Obtener el almacen de objetos
    const store = transaction.objectStore('miAlmacen');

    // Realizar una grabación en el almacen de objetos
    const data = {id: 1, name: 'Ejemplo'}
    const addRequest = store.add(data); // O store.put(data)

    // Manejar el resultado de la grabación
    addRequest.onsuccess = function (event) {
        console.log('Grabación correcta')
    };

    addRequest.onerror = function (event) {
        console.error('Error al realizar la grabación', event.target.error)
    };
    };
