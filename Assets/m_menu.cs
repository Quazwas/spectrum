using UnityEngine;
using System.Collections;

public class m_menu : MonoBehaviour {
	
	public int level;
	bool hasRend = false;
	bool isMore = false;
	int prefLevel;
	public Renderer rend;
	public Material[] materials;
	public GameObject mainCirc;
	public bool reset;
	void Start(){
		rend = mainCirc.GetComponent<Renderer> ();
		rend.enabled = true;
		if (!PlayerPrefs.HasKey("Level") || reset) {
			PlayerPrefs.SetInt("Level", 1);
			reset=false;
		}
		prefLevel = PlayerPrefs.GetInt ("Level");
		if(prefLevel>=level) {
			isMore=true;
		}
		if (isMore) {
			rend.sharedMaterial = materials[0];
		}

	}

	void OnTriggerEnter2D(Collider2D col) {
		if(isMore) {
			AutoFade.LoadLevel(level ,3,1,Color.black);
		}
	}


}
