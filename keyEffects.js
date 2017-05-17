

function lightUp(key, startTime)
{ 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {   
        if(noteBlockArray[i].note == key && noteBlockArray[i].startTime == startTime )
        {
            noteBlockArray[i].mesh.material.color.setHex(0x00ff00);
            addShine(noteBlockArray[i], i);
             // noteBlockArray[i].mesh.position.z = 2;
            break;
        }
    }  
     //sound?
}

function lightOff(key, stopTime)
{ 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {
        if(noteBlockArray[i].note == key && noteBlockArray[i].stopTime == stopTime)
        {   
            removeShine(noteBlockArray[i], i);
            noteBlockArray[i].mesh.material.color.setHex(0x0000ff);
            noteBlockArray[i].mesh.position.z = 0;
            line.material.color.setHex(0x050505);

            break;
        }

    }
      
}

/*function fullScore()
{
   fullScoreCounter = 0;
    noteBlockArray.mesh.material.color.setHex(0xffffff);
}*/