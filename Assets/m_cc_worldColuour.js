#pragma strict
var camer : GameObject;
var color :int;

function Update () {
	if(Input.GetKeyDown(KeyCode.R)) {
		color = changeWorldColor(0,color, camer.GetComponent(Camera));
	}
	if(Input.GetKeyDown(KeyCode.T)) {
		color = changeWorldColor(1,color, camer.GetComponent(Camera));
	}
	if(Input.GetKeyDown(KeyCode.Y)) {
		color = changeWorldColor(2,color, camer.GetComponent(Camera));
	}
}

function callChangeWorld(inp : int) {
	color = changeWorldColor(inp,color, camer.GetComponent(Camera));
}

function changeWorldColor (c : int, pC : int, cam : Camera) {
	Debug.Log(c+8);
	var array = FindAllWithTag(pC+8);
	for (var i = 0; i < array.Length; i++) {
		array[i].GetComponent.<Collider2D>().enabled=true;
	}
	
	array = FindAllWithTag(c+8);
	for (i = 0; i < array.Length; i++) {
		array[i].GetComponent.<Collider2D>().enabled=false;
	}
	
	if(c==0) {
		cam.backgroundColor = new Color(1,0.41,0.38,1);
	} else if(c==1) {
		cam.backgroundColor = new Color(0.47,0.75,0.47,1);
	} else if(c==2) {
		cam.backgroundColor = new Color(0.68,0.78,0.81,1);
	}
	
	return c;
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