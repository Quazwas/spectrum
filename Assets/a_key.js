#pragma strict

#pragma strict
var player : GameObject;
var colo : int;
function OnTriggerEnter2D() {
Debug.Log("x");
	player.GetComponent(m_playerColor).changeColor(colo);
}