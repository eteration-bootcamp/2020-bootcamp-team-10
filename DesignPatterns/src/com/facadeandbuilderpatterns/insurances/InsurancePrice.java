package com.facadeandbuilderpatterns.insurances;

import com.facadeandbuilderpatterns.insurances.impl.InsuranceI;

public class InsurancePrice {
	
	private  String name;
	private  int price;
	private InsuranceI healthInsurance;
	private InsuranceI carInsurance;
	private InsuranceI lifeInsurance;
	private InsuranceI buildingInsurance;
	
	
	public InsurancePrice() {
		
		healthInsurance = new HealthInsurance();
		carInsurance = new CarInsurance();
		lifeInsurance = new LifeInsurance();
		buildingInsurance = new BuildingInsurance();
		
	}
	
	public InsurancePrice(InsuranceBuilder insuranceBuilder) {
	
		
		
		this.name=insuranceBuilder.name;
		this.price=insuranceBuilder.price;
		
		
	}

	public String getName() {
		return name;
	}

	public int getPrice() {
		return price;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	
	public void printPriceHealth(){
		healthInsurance.PricePolicy();
	   }
	
	public void printPriceCar(){
		carInsurance.PricePolicy();
	   }
	
	public void printPriceLife(){
		lifeInsurance.PricePolicy();
	   }
	
	public void printPriceBuilding(){
		buildingInsurance.PricePolicy();
	   }
	
	 @Override
	    public String toString() {
	        return "Car: " + " Model: " + this.name + " ,Price: " + this.price;
	    }
	
	public static class InsuranceBuilder {
		
		 public final String name;
		 public int price;
		 
		 
		public String getName() {
			return name;
		}
		public int getPrice() {
			return price;
		}
		
		
		public InsuranceBuilder(String name) {
			this.name = name;
		}
		 
		public InsuranceBuilder price(int price) {
			this.price = price;
			return this;
		}
		
		public InsurancePrice build() {
			InsurancePrice insurancePrice = new InsurancePrice(this);
	        return insurancePrice;
	    }
	     
	}

	
	
}
