package com.facadeandbuilderpatterns.insurances;

import com.facadeandbuilderpatterns.insurances.impl.InsuranceI;

public class LifeInsurance implements InsuranceI{

	@Override
	public void PricePolicy() {
		
		System.out.println(" Life Insurance: 1000 $");
		
	}

}
