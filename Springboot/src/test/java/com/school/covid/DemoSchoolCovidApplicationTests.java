package com.school.covid;

import com.school.covid.entity.HttpData.NewsList;
import com.school.covid.mapper.HomeMapper;
import com.school.covid.service.SentPhoneMessageService;
import com.school.covid.service.javaMailService;
import com.school.covid.waring.SentPhoneMessage;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;

@SpringBootTest
class DemoSchoolCovidApplicationTests {
//    @Autowired
//    private RestTemplate restTemplate;
//    @Autowired
//    private HomeMapper homeMapper;
//
//    @Test
//    public void http() {
//
//       NewsList newsList = restTemplate.getForObject("http://api.tianapi.com/ncov/index?key=7ddcf8f797a5113b5150baf3292e8d3f", NewsList.class);
//
//        System.out.println(newsList);
//    }

    @Autowired
    javaMailService javaMailService;
    @Autowired
    SentPhoneMessageService sentPhoneMessageService;
    @Autowired
    SentPhoneMessage sentPhoneMessage;
    @Test
    void contextLoads() throws Exception {




         sentPhoneMessage.sentPhone();
        javaMailService.senEmail("2503963481@qq.com");

    }

}
