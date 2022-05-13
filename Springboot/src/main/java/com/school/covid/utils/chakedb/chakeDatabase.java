package com.school.covid.utils.chakedb;

import com.school.covid.mapper.HomeMapper;
import com.school.covid.utils.geturl.GetNews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

//@Component
//@EnableScheduling
//public class chakeDatabase {
//    @Autowired
//    private HomeMapper homeMapper;
//    @Scheduled(fixedDelay = 1000*60*60*500)
//    public void CovidNewsData(){
//        System.out.println(homeMapper.selectList(null));
//    }
//
//}
