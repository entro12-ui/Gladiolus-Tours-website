package com.gladiolustours.model;

public class Booking {

    private String fullName;
    private String email;
    private String subject;
    private String dateFrom;
    private String dateTo;
    private Integer adults;
    private Integer child;      // 0 - 5
    private String moreInfo;
    private String code;

    public Booking(String fullName, String email, String subject, String dateFrom, String dateTo, Integer adults, Integer child, String moreInfo, String code) {
        this.fullName = fullName;
        this.email = email;
        this.subject = subject;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.adults = adults;
        this.child = child;
        this.moreInfo = moreInfo;
        this.code = code;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
    }

    public String getDateTo() {
        return dateTo;
    }

    public void setDateTo(String dateTo) {
        this.dateTo = dateTo;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
    }

    public String getMoreInfo() {
        return moreInfo;
    }

    public void setChild(Integer child) {
        this.child = child;
    }

    public Integer getChild() {
        return child;
    }

    public void setAdults(Integer adults) {
        this.adults = adults;
    }

    public Integer getAdults() {
        return adults;
    }
}
