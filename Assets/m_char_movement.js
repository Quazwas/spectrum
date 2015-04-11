#pragma strict

var cha : GameObject;
var character : Rigidbody2D;
var speed : float = 5;
var jumpVel : float = 10;
var ground : boolean;
var velocity : Vector3;
static var lastJumpTime : float = 0;
static var timeSinceLastJump : float;
var jumpTimeOut : float = 1;


function Start () {
	character = GetComponent.<Rigidbody2D>();
}

function Update () {
	//move player horizontally
	if(Input.GetAxis("Horizontal") != 0) {
		character.velocity.x = Input.GetAxis("Horizontal") * speed;
	} 
	if(Input.GetAxis("Horizontal") == 0) {
		character.velocity.x = 0;
	}
	if(Input.GetAxis("Jump")) {
		if(cha.GetComponent.<m_char_gravity>().gravity <= 0) {
			if(isOnGround(true)) {
				character.velocity.y = jumpVel;
			}
		} else {
			if(isOnGround(false)) {
				character.velocity.y = -jumpVel;
			}
		}
	}
}

function OnCollisionStay2D(coll: Collision2D) {
	if(Input.GetAxis("Jump")) {
		/*timeSinceLastJump = Time.time - lastJumpTime;
		if(timeSinceLastJump >= jumpTimeOut) {
			if(cha.GetComponent.<m_char_gravity>().gravity <= 0) {
				character.velocity.y = jumpVel;
			} else {
				character.velocity.y = -jumpVel;
			}
			lastJumpTime = Time.time;
		}*/

	}
}

function isOnGround(dir : boolean) {
	var check : boolean = false;
	var mod : int;
	if(dir) {
		mod=-1;
	} else {
		mod=1;
	}
	var hit = Physics2D.Raycast(transform.position, mod*Vector2.up);
	if(hit.collider != null) {
		var distance = Mathf.Abs(hit.point.y - transform.position.y);
		Debug.Log(distance);
		if(distance < 0.5) {
			return true;
		} else {
			return false;
		}
	}
}








