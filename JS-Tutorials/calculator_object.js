let calci = {

    name: "Calculator",

    add : function(a,b){
        return a+b;
    },

    multi : function(a,b){

        return a*b
    },

    disp : function(){
        console.log(this.name);
    }
};

calci.disp()