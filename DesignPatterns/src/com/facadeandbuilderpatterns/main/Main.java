package com.facadeandbuilderpatterns.main;

import com.facadeandbuilderpatterns.insurances.InsurancePrice;

public class Main {
	
	public static void main(String[] args) {
	      InsurancePrice insurancePrice = new InsurancePrice();

	      
	      
	      System.out.println("FACADE PATTERN");
	      
	      System.out.println("Insurance Price Policies");
	      System.out.println("=================================");
	      System.out.println("");
	      System.out.println("Building Insurance");
	      
	      insurancePrice.printPriceBuilding();
	      System.out.println("");
	      System.out.println("Car Insurance");
	      
	      insurancePrice.printPriceCar();
	      System.out.println("");
	      System.out.println("Health Insurance");
	      
	      insurancePrice.printPriceHealth();
	      System.out.println("");
	      System.out.println("Life Insurance");
	      
	      insurancePrice.printPriceLife();
	      
	      System.out.println("");
	      System.out.println("BUILDER PATTERN");
	      System.out.println("Insurance Price Policies");
	      System.out.println("=================================");
	      
	      InsurancePrice bmw = new InsurancePrice.InsuranceBuilder("520i")
	    		  .price(150000)
	    		  .build();
	      
	      System.out.println(bmw);
	   }

}
