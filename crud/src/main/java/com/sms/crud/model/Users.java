package com.sms.crud.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="users")
public class Users{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
	@SequenceGenerator(name="user_generator", sequenceName = "user_seq")
	@Column(name = "id", updatable = false, nullable = false)
    private long id;


    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="dob")
    private Date dob;

    @Column(name="access_level")
    private Integer access_level;

    @Column(name="company_id")
    private Integer company_id;

   // @Column(name="created_by")
  // private Integer created_by;

    //@Column(name="created_at")
    //private Date created_at;

    //@Column(name="updated_by")
    //private Integer updated_by;

    //@Column(name="updated_at")
    //private Date updated_at;

    public Users(String firstname, String lastname, String email, String password, Date dob, Integer access_level, Integer company_id){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.password=password;
        this.dob=dob;
        this.access_level=access_level;
        this.company_id=company_id;
        //this.created_by=created_by;
        //this.created_at=created_at;
        //this.updated_by=updated_by;
        //this.updated_at=updated_at;
    }

    public Users(){
        
    }

    public long getId(){
        return id;
    }

    public String getFirstname() {
		return firstname;
    }
    
    public String setFirstname(String firstname){
        return this.firstname = firstname;
    }

    public String getLastname(){
        return lastname;
    }

    public String setLastname(String lastname){
        return this.lastname = lastname;
    }

    public String setEmail(String email){
        return this.email = email;
    }

    public String getEmail() {
		return email;
    }
    
    public String setPassword(String password){
        return this.password = password;
    }

    public String getPassword() {
		return password;
    }
    
    

    public Date getDob(){
        return dob;
    }

    public Date setDob(Date dob) {
        return this.dob=dob;
    }

    public Integer getAccessLevel(){
        return access_level;
    }
    
    public Integer setAccessLevel(Integer access_level) {
        return this.access_level=access_level;
    }

    public Integer getCompanyId(){
        return company_id;
    }
    
    public Integer setCompanyId(Integer company_id) {
        return this.company_id=company_id;
    }

    //public Integer getCreatedBy(){
      //  return created_by;
    //}
    
    //public Integer setCreatedBy(Integer created_by) {
      //  return this.created_by=created_by;
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
		return "Users [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", access_level=" + access_level + "]";
	}

	public static boolean isEmpty() {
		return false;
	}

	// public static boolean isEmpty() {
	// 	return false;
	// }


}