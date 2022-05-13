package com.school.covid.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.school.covid.constant.Constant;
import com.school.covid.entity.HttpData.NewsList;
import com.school.covid.entity.HttpData.NewsListData;
import com.school.covid.entity.HttpData.news;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/covid")
public class CovidResourceController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private RedisTemplate redisTemplate;



    @SneakyThrows
    @GetMapping("/news")
    @ResponseBody
    public List gateDatNews(){
        NewsList newsList=restTemplate.getForObject("http://api.tianapi.com/ncov/index?key=7ddcf8f797a5113b5150baf3292e8d3f",NewsList.class);
//        System.out.println(newsList);
//        String string=null;
//        List<NewsListData>newsListsData=newsList.getNewslist();
//        for (NewsListData news:newsListsData){
//            string=objectMapper.writeValueAsString(news);
//        }
//        redisTemplate.opsForValue().set(Constant.NEWS,string);

//        String s= (String) redisTemplate.opsForValue().get(Constant.NEWS);


        return newsList.getNewslist();
    }
}
