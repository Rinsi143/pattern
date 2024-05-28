(function() {
    var instance;
    
    function createInstance() {
        // Singleton logic here
        return {
            method: function() {
                console.log("Singleton method called");
            }
        };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function getSingletonInstance() {
    var singletonInstance = Singleton.getInstance();
    singletonInstance.method();
}