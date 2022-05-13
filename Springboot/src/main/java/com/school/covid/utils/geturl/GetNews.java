package com.school.covid.utils.geturl;


import com.school.covid.entity.HttpData.NewsList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class GetNews {
    @Autowired
    private RestTemplate restTemplate;
    private String url;
    private String key;
    public NewsList GetMessage(){

        NewsList newsList=restTemplate.getForObject("http://api.tianapi.com/ncov/index?key=7ddcf8f797a5113b5150baf3292e8d3f",NewsList.class);

        System.out.println(newsList);

        return newsList;
    }


}
