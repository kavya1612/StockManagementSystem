package com.sms.crud.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="company")
public class  Company{
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "company_generator")
	@SequenceGenerator(name="company_generator", sequenceName = "company_seq")
	@Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name="company_name")
    private String company_name;

    @Column(name="company_manager")
    private Integer company_manager;

    @Column(name="stocks_id")
    private Integer stocks_id;

    @Column(name="stocks_count")
    private Integer stocks_count;
    
    @Column(name="investor_stocks_limit")
    private Integer investor_stocks_limit;

    @Column(name="investor_investment_limit")
    private Integer investor_investment_limit;

    //@Column(name="created_by")
    //private Integer created_by;

    //@Column(name="created_at")
    //private Date created_at;

    //@Column(name="updated_by")
    //private Integer updated_by;

    //@Column(name="updated_at")
    //private Date updated_at;

    public Company(String company_name, Integer company_manager, Integer stocks_id, Integer stocks_count, Integer investor_stocks_limit, Integer investor_investment_limit){
        this.company_name=company_name;
        this.company_manager=company_manager;
        this.stocks_id=stocks_id;
        this.stocks_count=stocks_count;
        this.investor_stocks_limit=investor_stocks_limit;
        this.investor_investment_limit=investor_investment_limit;
        //this.created_by=created_by;
        //this.created_at=created_at;
        //this.updated_by=updated_by;
        //this.updated_at=updated_at;
    }

    public Company(){

    }

    public long getId(){
        return id;
    }

    public String getCompanyName() {
		return company_name;
    }
    
    public String setCompanyName(String company_name){
        return this.company_name = company_name;
    }

    public Integer getCompanyManager() {
		return company_manager;
    }
    
    public Integer setCompanyManager(Integer company_manager){
        return this.company_manager = company_manager;
    }

    public Integer getStocksId() {
		return stocks_id;
    }
    
    public Integer setStocksId(Integer stocks_id){
        return this.stocks_id = stocks_id;
    }

    public Integer getStocksCount() {
		return stocks_count;
    }
    
    public Integer setStocksCount(Integer stocks_count){
        return this.stocks_count = stocks_count;
    }
   
    public Integer getInvestorStocksLimit() {
		return investor_stocks_limit;
    }
    
    public Integer setInvestorStocksLimit(Integer investor_stocks_limit){
        return this.investor_stocks_limit = investor_stocks_limit;
    }

    public Integer getInvestorInvestmentLimit() {
		return investor_investment_limit;
    }
    
    public Integer setInvestorInvestmentLimit(Integer investor_investment_limit){
        return this.investor_investment_limit = investor_investment_limit;
    }

   // public Integer getCreatedBy(){
     //   return created_by;
    //}
    
    //public Integer setCreatedBy(Integer created_by) {
      //  return this.created_by=created_by;
    //}

    //public Date getCreatedAt(){
      //  return created_at;
    //}
    
    //public Date setCreatedAt(Date created_at) {
      //  return this.created_at=created_at;
   // }

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
		return "Company [id=" + id + ", Companyname=" + company_name + "]";
	}

	public static boolean isEmpty() {
		return false;
	}


}
