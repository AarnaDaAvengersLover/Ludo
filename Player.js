class Player{
    constructor(x,y,path){
        this.position=null;
        this.body=createSprite(x,y,10,10);
        this.body.addImage(path);
        this.body.scale=0.3;
    }
   
    move(){
        var currentPositionIndex=parseInt((this.position).slice(3));
        var newPosition=currentPositionIndex+game.number;
        if(turn==="blue"){
            var newPositionIndex="pos"+newPosition;
            if(game.bluePositions[newPositionIndex]!==null){
                this.body.x=game.bluePositions[newPositionIndex][0];
                this.body.y=game.bluePositions[newPositionIndex][1];
                this.position=newPositionIndex;
                if(game.number!==6){
                turn="green";
                }else{
                    turn="blue"
                }
            }
        }else if (turn==="green"){
            var newPositionIndex="pos"+newPosition;
            if(game.greenPositions[newPositionIndex]!==null){
                this.body.x=game.greenPositions[newPositionIndex][0];
                this.body.y=game.greenPositions[newPositionIndex][1];
                this.position=newPositionIndex;
                if(game.number!==6){
                    turn="blue";
                    }else{
                        turn="green"
                    } 
            }
        }


    }
 
        
}