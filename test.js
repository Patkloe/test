class Graph{
 constructor(nbresommet){
  this.nbresommet = nbresommet;
  this.listadj = new Map();
 }
 addsommet(v){
  this.listadj.set(v,[]);
 }
 addchemin(v,w){
  this.listadj.get(v).push(w);
  this.listadj.get(w).push(v);
 }
 printgraph(){
  var getkeys = this.listadj.keys();
  for(var i of getkeys){
      var conc = " ";
      var listsommet = this.listadj.get(i);
      for( var j of listsommet)
           conc = conc + j;
   console.log(i + " " + " ->" + " " + conc);
  }
 }// fin printgraph
 parcours_BFS(startpt){
  function Queue(){
   this.elements = [];
  }
   Queue.prototype.enqueue = function(x){
   return this.elements.push(x);
   }
  Queue.prototype.length = function(){
  return this.elements.length;
  }
  Queue.prototype.dequeue = function(){
  return this.elements.shift();
  }
     var file = new Queue();
     file.enqueue(startpt);
     console.log(file.length());
 }// fin BFS
} //fin class Graph
var test = new Graph(5);
var tab = ['A','B','C','D','E'];
for(var i = 0; i < tab.length; i++)
        test.addsommet(tab[i]);
        test.addchemin('A','B');
        test.addchemin('A','C');
        test.addchemin('A','D');
        test.addchemin('A','E');
        test.addchemin('B','C');
        test.addchemin('B','D');
        test.addchemin('C','D');
        test.addchemin('C','E');
        test.addchemin('D','E');
        console.log("Your graph");
        test.printgraph();
        test.parcours_BFS('A');
