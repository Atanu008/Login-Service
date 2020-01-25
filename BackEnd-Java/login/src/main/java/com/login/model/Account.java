package com.login.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Account")
public class Account {

	//@GeneratedValue(strategy = GenerationType.AUTO)
	//@Id
	@Column(name = "id")
	private long id;

	@Id
	@Column(name = "email")
	private String email;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;


	@Column(name = "date_created")
	private Date DateCreated;

	@Column(name = "date_updated")
	private Date DateUpdated;

	@OneToOne(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private User user;
	
	public Account() {

	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getFirstName() {
		return firstName;
	}




	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}




	public String getLastName() {
		return lastName;
	}




	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public Date getDateCreated() {
		return DateCreated;
	}


	public void setDateCreated(Date dateCreated) {
		DateCreated = dateCreated;
	}


	public Date getDateUpdated() {
		return DateUpdated;
	}


	public void setDateUpdated(Date dateUpdated) {
		DateUpdated = dateUpdated;
	}






}
