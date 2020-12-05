package com.sms.crud.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="stocks")
public class Stocks {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "stocks_generator")
	@SequenceGenerator(name="stocks_generator", sequenceName = "stocks_seq")
	@Column(name = "id", updatable = false, nullable = false)
    private long id;


    @Column(name="stock_name")
    private String stock_name;

    @Column(name="stock_type")
    private Integer stock_type;

    @Column(name="stock_count")
    private Integer stock_count;

    @Column(name="stock_price")
    private Integer stock_price;

    @Column(name="stock_owner")
    private Integer stock_owner;
    
    @Column(name="stock_holder")
    private Integer stock_holder;

   // @Column(name="created_by")
   // private Integer created_by;

    //@Column(name="created_at")
    //private Date created_at;

    //@Column(name="updated_by")
    //private Integer updated_by;

   // @Column(name="updated_at")
   // private Date updated_at;

    public Stocks(String stock_name, Integer stock_type, Integer stock_count, Integer stock_price, Integer stock_owner, Integer stock_holder){
        this.stock_name=stock_name;
        this.stock_type=stock_type;
        this.stock_count=stock_count;
        this.stock_price=stock_price;
        this.stock_owner=stock_owner;
        this.stock_holder=stock_holder;
        //this.created_by=created_by;
        //this.created_at=created_at;
        //this.updated_by=updated_by;
        //this.updated_at=updated_at;
    }

    public Stocks(){

    }

    public long getId(){
        return id;
    }

    public String getStockName() {
		return stock_name;
    }
    
    public String setStockName(String stock_name){
        return this.stock_name = stock_name;
    }

    public Integer getStockType() {
		return stock_type;
    }
    
    public Integer setStockType(Integer stock_type) {
        return this.stock_type = stock_type;
    }

    public Integer getStockCount() {
		return stock_count;
    }
    
    public Integer setStockCount(Integer stock_count){
        return this.stock_count = stock_count;
    }

    public Integer getStockPrice() {
		return stock_price;
    }
    
    public Integer setStockPrice(Integer stock_price){
        return this.stock_price = stock_price;
    }

    public Integer getStockOwner() {
		return stock_owner;
    }
    
    public Integer setStockOwner(Integer stock_owner){
        return this.stock_owner = stock_owner;
    }

    public Integer getStockHolder() {
		return stock_holder;
    }
    
    public Integer setStockHolder(Integer stock_holder){
        return this.stock_holder = stock_holder;
    }

    //public Integer getCreatedBy(){
      //  return created_by;
   // }
    
   // public Integer setCreatedBy(Integer created_by) {
     //   return this.created_by=created_by;
    //}

    //public Date getCreatedAt(){
      //  return created_at;
    //}
    
    //public Date setCreateAt(Date created_at) {
      //  return this.created_at=created_at;
    //}

    //public Integer getUpdatedBy(){
      //  return updated_by;
    //}
    
    //public Integer setUpdatedBy(Integer updated_by) {
      //  return this.updated_by=updated_by;
    //}

    //public Date getUpdatedAt(){
      //  return updated_at;
    //}
    
    //public Date setUpdatedAt(Date updated_at) {
      //  return this.updated_at=updated_at;
    //}

    @Override
	public String toString() {
		return "Stocks [id=" + id + ", Stockname=" + stock_name + "]";
	}

	public static boolean isEmpty() {
		return false;
	}


}
