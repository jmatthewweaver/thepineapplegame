package com.iw.tpg.api.controllers;

import com.iw.tpg.api.beans.CurrentUserBean;
import com.iw.tpg.api.dto.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/current_user")
public class CurrentUserInfoController {

    @Autowired
    private CurrentUserBean currentUserBean;

    @RequestMapping(value = "/info", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getCurrentUserInfo() {
        return currentUserBean.getUserInfo();
    }
}
