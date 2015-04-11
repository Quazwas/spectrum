#pragma strict

var cf : GameObject;
var cb : GameObject;

var current : int;

var materials : Material[];

var rend: Renderer;

function Start() {
	rend = cf.GetComponent.<Renderer>();
	rend.enabled = true;
}


function changeColor (colo : int) {
	
	var array = FindAllWithTag(current+11);
	for (var i = 0; i < array.Length; i++) {
		array[i].GetComponent.<Collider2D>().enabled=true;
	}
	
	array = FindAllWithTag(colo+11);
	for (i = 0; i < array.Length; i++) {
		array[i].GetComponent.<Collider2D>().enabled=false;
	}
	
	current = colo;
	rend.sharedMaterial=materials[colo];
	
}

function FindAllWithTag (layer : int){
	var array = FindObjectsOfType(GameObject);
	var list = new System.Collections.Generic.List.<GameObject>();
	for (var i = 0; i < array.Length; i++) {
		if (array[i].layer == layer) {
			list.Add(array[i]);
		}
	}
	if (list.Count == 0) {
		return null;
	}
	return list.ToArray();
}