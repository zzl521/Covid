package com.school.covid.utils;

import com.school.covid.utils.geturl.GetNews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


@Component
@EnableScheduling
public class CovidTask {

    @Autowired
    private GetNews getNews;
//    @Scheduled(fixedDelay = 1000*60*60)
//    public void CovidNewsData(){
//       getNews.GetMessage();
//    }
}
