using UnityEngine;
using System.Collections;

public class loadLevel : MonoBehaviour {

	public int level;
	public int currentLevel;
	void OnTriggerEnter2D(Collider2D col) {
		if (PlayerPrefs.GetInt ("Level") < currentLevel + 1) {
			PlayerPrefs.SetInt ("Level", currentLevel + 1);
		}
		AutoFade.LoadLevel (level, 3, 1, Color.black);
	}
}
