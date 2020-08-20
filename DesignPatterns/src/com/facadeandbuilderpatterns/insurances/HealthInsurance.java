package com.facadeandbuilderpatterns.insurances;

import com.facadeandbuilderpatterns.insurances.impl.InsuranceI;

public class HealthInsurance implements InsuranceI{

	@Override
	public void PricePolicy() {
		System.out.println(" Health  Insurance: 7000 $");
		
	}

}
