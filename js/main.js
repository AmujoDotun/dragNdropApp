const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Listerning to an event

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//looping through empties and drag event

for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);

}

//drag functions




function dragStart(){
     //appending the hold class
     this.className += ' hold';
     //setting time out for the image to be invisible when drag away
     setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className += 'empty';
}

function dragDrop(){
    this.className += 'empty';
    //appending the value drag inside the drop box
    this.append(fill);
}
