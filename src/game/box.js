export const Box = {

    x: 0,
    y: 0,

    width: 50,
    height: 50,

    color: "red",
    size: 50,

    visible:false,

    setCordinates: function(x,y){
        this.x = x;
        this.y = y;

        return this;
    },

    setBoxSettings: function(settings){

        this.color = settings.color || this.color;
        this.size = settings.size || this.size;

        return this;
    }
};