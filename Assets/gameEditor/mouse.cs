using UnityEngine;
using System.Collections;

public class mouse : MonoBehaviour {

	public GameObject gizmo;
	GameObject selection;
	public GameObject[] objects;
	int sIndex;

	void Start() {
		gizmo = Instantiate (gizmo, new Vector3(0,0,0),Quaternion.identity) as GameObject;
	}
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Q)) {
			sIndex+=1;
			Destroy(gizmo.gameObject);
			selection = objects[Mathf.Abs (sIndex%objects.Length)];
			gizmo = Instantiate (selection,new Vector3(0,0,0),Quaternion.identity) as GameObject;
		}
		if (Input.GetKeyDown (KeyCode.A)) {
			sIndex-=1;
			Destroy(gizmo.gameObject);
			selection = objects[Mathf.Abs(sIndex%objects.Length)];
			gizmo = Instantiate (selection,new Vector3(0,0,0),Quaternion.identity) as GameObject;
		}


		Vector3 mousePos = Input.mousePosition;
		Vector3 mouseCoords = GetComponent<Camera>().ScreenToWorldPoint(mousePos);
		Vector3 coords = new Vector3 (Mathf.Round(mouseCoords.x),Mathf.Round(mouseCoords.y),-0.2f);
		gizmo.transform.position = coords;
		if (Input.GetKeyDown (KeyCode.Mouse0)) {
			Instantiate (gizmo,coords,Quaternion.identity);
		}

	}
}
