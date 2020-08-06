package org.codesmells;

public class Nokia3310 implements Phone {
	@Override
	public void takingPicture() {
		//Refused Request Example
		throw new IllegalStateException("Nokia3310 can't take photo!");
	}
	
	public static void main(String[] args) {
		Nokia3310 n3310 = new Nokia3310();
		n3310.takingPicture();
	}
}


