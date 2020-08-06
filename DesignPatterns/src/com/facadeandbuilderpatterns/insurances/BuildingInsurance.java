package com.facadeandbuilderpatterns.insurances;

import com.facadeandbuilderpatterns.insurances.impl.InsuranceI;

public class BuildingInsurance implements InsuranceI{

	@Override
	public void PricePolicy() {
		System.out.println(" Building Insurance: 33000 $");
		
	}

}
