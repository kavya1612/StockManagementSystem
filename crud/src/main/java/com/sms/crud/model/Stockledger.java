package com.sms.crud.model;
import java.sql.Date;

import javax.persistence.*;

import org.hibernate.internal.util.type.PrimitiveWrapperHelper.IntegerDescriptor;

@Entity
@Table(name="stockledger")
public class Stockledger {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "stocks_ledger_generator")
	@SequenceGenerator(name="stocks_ledger_generator", sequenceName = "stocks_ledger_seq")
	@Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name="purchase_stock_id")
    private Integer purchase_stock_id;

    @Column(name="purchase_stock_name")
    private String purchase_stock_name;

    @Column(name="owner_id")
    private Integer owner_id;

    @Column(name="date_of_purchase")
    private Date date_of_purchase;

    @Column(name="stock_price")
    private Integer stock_price;

    @Column(name="stock_company")
    private String stock_company;

    public Stockledger(Integer purchase_stock_id, String purchase_stock_name, Integer owner_id, Date date_of_purchase, Integer stock_price, String stock_company) {
        this.purchase_stock_id=purchase_stock_id;
        this.purchase_stock_name=purchase_stock_name;
        this.owner_id=owner_id;
        this.date_of_purchase=date_of_purchase; 
        this.stock_price=stock_price;
        this.stock_company=stock_company;
    }

    public Stockledger(){

    }
    public long getId(){
        return id;
    }

    public Integer getPurchaseStockId() {
		return purchase_stock_id;
    }
    
    public Integer setPurchaseStockId(Integer purchase_stock_id){
        return this.purchase_stock_id = purchase_stock_id;
    }

    public String getPurchaseStockName() {
		return purchase_stock_name;
    }
    
    public String setPurchaseStockName(String purchase_stock_name){
        return this.purchase_stock_name = purchase_stock_name;
    }

    public Integer getOwnerId() {
		return owner_id;
    }
    
    public Integer setOwnerId(Integer owner_id){
        return this.owner_id = owner_id;
    }

    public Date getDateOfPurchase() {
		return date_of_purchase;
    }
    
    public Date setDateOfPurchase(Date date_of_purchase){
        return this.date_of_purchase = date_of_purchase;
    }
    //this.stock_price=stock_price;
    //this.stock_company=stock_company;
    public Integer getStockPrice() {
		return stock_price;
    }
    
    public Integer setStockPrice(Integer stock_price){
        return this.stock_price= stock_price;

    }

    public String getStockCompany() {
		return stock_company;
    }
    
    public String setStockCompany(String stock_company){
        return this.stock_company = stock_company;
    }

    @Override
	public String toString() {
		return "Stocksled [id=" + id + ", Stockname=" + purchase_stock_name + "]";
	}

	public static boolean isEmpty() {
		return false;
	}


}
