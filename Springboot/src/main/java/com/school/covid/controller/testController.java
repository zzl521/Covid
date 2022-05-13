package com.school.covid.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.school.covid.constant.Constant;
import com.school.covid.entity.HealthClock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class testController {

    @Autowired
    private RedisTemplate redisTemplate;
    @RequestMapping("/t")
    public void test(){

        String s= (String) redisTemplate.opsForValue().get(Constant.NEWS);
        System.out.println(s);
    }
}
