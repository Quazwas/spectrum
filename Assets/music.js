/*
Create a gameObject as a child of the main Camera
Create audiosources on GameObject
Attach script to GameObject
Enter red, green, and blue tracks.
*/

#pragma strict

var cam : Camera;

var redTrack : AudioSource;
var greenTrack : AudioSource;
var blueTrack : AudioSource;

var volume : float = 0.5;

function Start () {

}

function Update () {
	//Debug.Log(cam.backgroundColor);
	if(cam.backgroundColor == new Color(1,0.41,0.38,1)) {
		//Debug.Log("RED");
		redTrack.volume = volume;
		blueTrack.volume = 0;
		greenTrack.volume = 0;
	} else if(cam.backgroundColor == new Color(0.47,0.75,0.47,1)) {
		redTrack.volume = 0;
		blueTrack.volume = volume;
		greenTrack.volume = 0;
		//Debug.Log("GREEN");
	} else if(cam.backgroundColor == new Color(0.68,0.78,0.81,1)) {
		redTrack.volume = 0;
		blueTrack.volume = 0;
		greenTrack.volume = volume;
		//Debug.Log("BLUE");
	}
}