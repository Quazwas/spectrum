#pragma strict


var X_RotationLockedAt : int ; //locking the rotation at a certain angle for X
var Y_RotationLockedAt : int ; //locking the rotation at a certain angle for Y
var Z_RotationLockedAt : int ; //locking the rotation at a certain angle for Z
var player : GameObject;
 
function Update()
{
	if(player.GetComponent.<m_char_gravity>().gravity < 0){
		transform.rotation = Quaternion.Euler(X_RotationLockedAt, Y_RotationLockedAt, Z_RotationLockedAt);
	} else {
     transform.rotation = Quaternion.Euler(X_RotationLockedAt, Y_RotationLockedAt, Z_RotationLockedAt-180);
    }
     
}