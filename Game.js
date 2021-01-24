class Game{
    constructor(){
        this.number=null;
        var  refx=windowWidth/2-40;
        var refy=windowHeight-105;
        this.bluePositions= {
            pos1: [refx, refy],
            pos2: [refx, refy-37],
            pos3: [refx, refy-(37*2)],
            pos4: [refx, refy-(37*3)],
            pos5: [refx, refy-(37.5*4)],
            pos6: [refx-32, refy-(37.5*5)],
            pos7: [refx-(34*2), refy-(37.5*5)],
            pos8: [refx-(36*3), refy-(37.5*5)],
            pos9: [refx-(36*4), refy-(37.5*5)],
            pos10: [refx-(36.5*5), refy-(37.5*5)],
            pos11: [refx-(36.5*6), refy-(37.5*5)],
            pos12: [refx-(36.5*6), refy-(37*6)],
            pos13: [refx-(36.5*6), refy-(36.5*7)],
            pos14: [refx-(36.5*5), refy-(36.5*7)],
            pos15: [refx-(36*4), refy-(36.5*7)],
            pos16: [refx-(36*3), refy-(36.5*7)],
            pos17: [refx-(34*2), refy-(36.5*7)],
            pos18: [refx-(32), refy-(36.5*7)],
            pos19: [refx+6, refy-(37*8)],
            pos20: [refx+6, refy-(37*9)],
            pos21: [refx+6, refy-(37*10)],
            pos22: [refx+6, refy-(37*11)],
            pos23: [refx+6, refy-(37*12)],
            pos24: [refx+6, refy-(37*13)],
            pos25: [refx+40, refy-(37*13)],
            pos26: [refx+(40*2), refy-(37*13)],
            pos27: [refx+(40*2), refy-(37*12)],
            pos28: [refx+(40*2), refy-(37*11)],
            pos29: [refx+(40*2), refy-(37*10)],
            pos30: [refx+(40*2), refy-(37*9)],
            pos31: [refx+(40*2), refy-(37*8)],
            pos32: [refx+(40*2.9), refy-(37*6.9)],
            pos33: [refx+(40*3.8), refy-(37*6.9)],
            pos34: [refx+(40*4.7), refy-(37*6.9)],
            pos35: [refx+(40*5.7), refy-(37*6.9)],
            pos36: [refx+(40*6.6), refy-(37*6.9)],
            pos37: [refx+(40*7.5), refy-(37*6.9)],
            pos38: [refx+(40*7.5), refy-(37*6)],
            pos39: [refx+(40*7.5), refy-(37*5.1)],
            pos40: [refx+(40*6.6), refy-(37*6)],
            pos41: [refx+(40*5.7), refy-(37*6)],
            pos42: [refx+(40*4.7), refy-(37*5.1)],
            pos43: [refx+(40*3.8), refy-(37*5.1)], 
            pos44: [refx+(40*2.9), refy-(37*5.1)],
            pos45: [refx+(40*1.9), refy-(37*4.1)],
            pos46: [refx+(40*1.9), refy-(37*3.1)],
            pos47: [refx+(40*1.9), refy-(37*2.1)],
            pos48: [refx+(40*1.9), refy-(37*1.1)],
            pos49: [refx+(40*1.9), refy-(37*0.1)],
            pos50: [refx+(40*1.9), refy-(37*(-1))],
            pos51: [refx+(40*1), refy-(37*(-1))],
            pos52: [refx+(40*0.1), refy-(37*(-1))],
            pos53: [refx+(40*0.1), refy-(37*(0.1))],
            pos54: [refx+(40*0.1), refy-(37*(1.1))],
            pos55: [refx+(40*0.1), refy-(37*(2.1))],
            pos56: [refx+(40*0.1), refy-(37*(3.1))],
            pos52: [refx+(40*0.1), refy-(37*(4.1))],
            pos52: [refx+(40*0.1), refy-(37*(5))],

          }

          this.greenPositions={
            pos1: [refx+(40*2), refy-(37*12)],
            pos2: [refx+(40*2), refy-(37*11)],
            pos3: [refx+(40*2), refy-(37*10)],
            pos4: [refx+(40*2), refy-(37*9)],
            pos5: [refx+(40*2), refy-(37*8)],
            pos6: [refx+(40*2.9), refy-(37*6.9)],
            pos7: [refx+(40*3.8), refy-(37*6.9)],
            pos8: [refx+(40*4.7), refy-(37*6.9)],
            pos9: [refx+(40*5.7), refy-(37*6.9)],
            pos10: [refx+(40*6.6), refy-(37*6.9)],
            pos11: [refx+(40*7.5), refy-(37*6.9)],
            pos12: [refx+(40*7.5), refy-(37*6)],
            pos13: [refx+(40*7.5), refy-(37*5.1)],
            pos16: [refx+(40*6.6), refy-(37*6)],
            pos17: [refx+(40*5.7), refy-(37*6)],
            pos42: [refx+(40*4.7), refy-(37*5.1)],
            pos18: [refx+(40*3.8), refy-(37*5.1)], 
            pos19: [refx+(40*2.9), refy-(37*5.1)],
            pos20: [refx+(40*1.9), refy-(37*4.1)],
            pos22: [refx+(40*1.9), refy-(37*3.1)],
            pos23: [refx+(40*1.9), refy-(37*2.1)],
            pos24: [refx+(40*1.9), refy-(37*1.1)],
            pos25: [refx+(40*1.9), refy-(37*0.1)],
            pos26: [refx+(40*1.9), refy-(37*(-1))],
            pos27: [refx+(40*1), refy-(37*(-1))],
            pos28: [refx+(40*0.1), refy-(37*(-1))],
            pos29: [refx, refy],
            pos30: [refx, refy-37],
            pos31: [refx, refy-(37*2)],
            pos32: [refx, refy-(37*3)],
            pos33: [refx, refy-(37.5*4)],
            pos34: [refx-32, refy-(37.5*5)],
            pos35: [refx-(34*2), refy-(37.5*5)],
            pos36: [refx-(36*3), refy-(37.5*5)],
            pos37: [refx-(36*4), refy-(37.5*5)],
            pos38: [refx-(36.5*5), refy-(37.5*5)],
            pos39: [refx-(36.5*6), refy-(37.5*5)],
            pos40: [refx-(36.5*6), refy-(37*6)],
            pos41: [refx-(36.5*6), refy-(36.5*7)],
            pos42: [refx-(36.5*5), refy-(36.5*7)],
            pos43: [refx-(36*4), refy-(36.5*7)],
            pos44: [refx-(36*3), refy-(36.5*7)],
            pos45: [refx-(34*2), refy-(36.5*7)],
            pos46: [refx-(32), refy-(36.5*7)],
            pos47: [refx+6, refy-(37*8)],
            pos48: [refx+6, refy-(37*9)],
            pos49: [refx+6, refy-(37*10)],
            pos50: [refx+6, refy-(37*11)],
            pos51: [refx+6, refy-(37*12)],
            pos52: [refx+6, refy-(37*13)],
            pos53: [refx+40, refy-(37*13)],
          }
        
    }

     rollDice(){
        var rand=Math.round(random(1,6));
      
        switch(rand){
          case 1: dice.addImage(dice1);
          this.number=1;
          break;
        //   case 2: dice.addImage(dice2);
        //   this.number=2;
        //   break;
        //   case 3: dice.addImage(dice3);
        //   this.number=3;
        //   break;
        //   case 4: dice.addImage(dice4);
        //  this.number=4;
        //   break;
        //   case 5: dice.addImage(dice5);
        //   this.number=5;
        //   break;
          default: dice.addImage(dice6);
          this.number=6;
          break;
        }
    }

    play(){
        textSize(20);
        fill(turn);
        text(turn+"'s Turn.",20,100);
        if(turn==="blue"){
             if(mousePressedOver(p1.body)){
                if(p1.body.x!==480&&p1.body.y!==530){
                    p1.move();
                    //setTimeOut(p1.move(),2000);
                   // turn="green";
                }else if(p1.body.x===480&&p1.body.y===530&&game.number===6){
                    p1.body.x=game.bluePositions.pos1[0];
                    p1.body.y=game.bluePositions.pos1[1];
                    p1.position="pos1";
                } else {
                    turn="green";
    
                }
             }else if(mousePressedOver(p2.body)){
                if(p2.body.x!==555&&p2.body.y!==535){
                    p2.move();
                    //setTimeOut(p1.move(),2000);
                   // turn="green";
                }else if(p2.body.x===555&&p2.body.y===535&&game.number===6){
                    p2.body.x=game.bluePositions.pos1[0];
                    p2.body.y=game.bluePositions.pos1[1];
                    p2.position="pos1";
                } else {
                    turn="green";
    
                }
             }else if(mousePressedOver(p3.body)){
                if(p3.body.x!==480&&p3.body.y!==455){
                    p3.move();
                    //setTimeOut(p1.move(),2000);
                   // turn="green";
                }else if(p3.body.x===480&&p3.body.y===455&&game.number===6){
                    p3.body.x=game.bluePositions.pos1[0];
                    p3.body.y=game.bluePositions.pos1[1];
                    p3.position="pos1";
                } else {
                    turn="green";
    
                }
             }else if(mousePressedOver(p4.body)){
                if(p4.body.x!==555&&p4.body.y!==460){
                    p4.move();
                    //setTimeOut(p1.move(),2000);
                   // turn="green";
                }else if(p4.body.x===555&&p4.body.y===460&&game.number===6){
                    p4.body.x=game.bluePositions.pos1[0];
                    p4.body.y=game.bluePositions.pos1[1];
                    p4.position="pos1";
                } else {
                    turn="green";
    
                }
             }

        }else if(turn==="green"){
            if(mousePressedOver(g1.body)){
                if(g1.body.x!==g1x&&g1.body.y!==g1y){
                    g1.move();
                }else if(g1.body.x===g1x&&g1.body.y===g1y&&game.number===6){
                    g1.body.x=game.greenPositions.pos1[0];
                    g1.body.y=game.greenPositions.pos1[1];
                    g1.position="pos1";
                } else {
                    turn="blue";
    
                }
             }
        }
        
    }
}