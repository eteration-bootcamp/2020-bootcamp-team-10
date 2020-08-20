package com.facadeandbuilderpatterns.insurances;

import com.facadeandbuilderpatterns.insurances.impl.InsuranceI;

public class CarInsurance implements InsuranceI{

	@Override
	public void PricePolicy() {
		System.out.println(" Car Insurance: 177 $");
		
	}

}
