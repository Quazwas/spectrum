#pragma strict

var character : GameObject;
var rb : Rigidbody2D;
public var gravity : float = -10;
var result : Vector2 = Vector2.zero;
var gravFields : GameObject[];

function calcGravStandard() {
	result.y += gravity;
}

function calcGravSpecial() {
	//calculate special gravity for each repulsor/attractor
	gravFields = GameObject.FindGameObjectsWithTag("gravField");
	for(var gravField in gravFields) {
		//var distance = Vector2.Distance(character.transform.position, gravField.transform.position);
		var heading = gravField.transform.position - character.transform.position;
		var distance = heading.magnitude;
		var direction = heading / distance;
		direction.z = 0;
		var force = gravField.GetComponent.<m_gravField>().force;
		var acceleration = force / (distance * distance);
		var angle = Vector3.Angle(Vector3.up,direction);// * Mathf.Deg2Rad;
		if(angle > 90) {
			angle -= 90;
		}
		if(angle > 45) {
			angle = 90 - angle;
		}
		angle *= Mathf.Deg2Rad;
		result.x += acceleration * Mathf.Sin(angle);
		result.y += acceleration * Mathf.Cos(angle);
		//Debug.Log(distance);
		Debug.Log(direction);
		//Debug.Log(force);
		Debug.Log(angle);
	}
}

function Start () {
	
}

function Update () {

	result = Vector2.zero;
	//constant gravity
	calcGravStandard();
	//attractors and repulsors
	calcGravSpecial();
	//apply force
	rb.AddForce(result);
}

//detect if hit an inverter
function OnTriggerEnter2D(col : Collider2D) {
	if(col.gameObject.tag == "Invert") {
		//invert gravity
		gravity *= -1;
	}
}