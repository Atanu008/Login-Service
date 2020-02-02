package com.login.utils;

import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

public class Utils {
    public static Date getCurrentDateInUTC(){
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeZone(TimeZone.getTimeZone("UTC"));
        return calendar.getTime();
    }


}
