#pragma strict
var player : GameObject;
var colo : int;
function OnTriggerEnter2D() {
	player.GetComponent(m_cc_worldColuour).callChangeWorld(colo);
}