import React from "react";
import axios from "axios";

var defaultHeader = {
    "Content-Type": "application/json"
    // token :
};

var postMethodHeaders = {
    "Content-Type": "application/x-www-form-urlencoded"
};



export const getMethod = async (url, header, params, domainName) => {
    try {
        console.log(
            domainName, "domainName")
        const response = await axios({
            method: "get",
            url: url,
            params: params ? params : "",
            headers: header ? header : defaultHeader
        });
        return response;
    } catch (error) {
        if (error && error.response && error.response.status === 401) {

        }
        return error;
    }
};

export const postMethod = async (
    url,
    requestData,
    params,
    header,
    domainName
) => {
    try {
        console.log(url, "url",
            requestData, "requestData",
            params, "params",
            header, "header",
            domainName, "domainName")
        const response = await axios({
            method: "post",
            url: domainName ? domainName + url : "",
            data: requestData,
            params: params ? params : "",
            headers: header ? header : postMethodHeaders,
            transformRequest: jsonData => transformRequest(jsonData)
        });
        return response;
    } catch (error) {
        // console.error(error);
        return error.response;
    }
};

export const putMethod = async (
    url,
    requestData,
    params,
    header,
    domainName
) => {
    try {
        const response = await axios({
            method: "put",
            url: domainName ? domainName + url : "",
            data: requestData,
            params: params ? params : "",
            headers: header ? header : postMethodHeaders
        });
        return response;
    } catch (error) {
        if (error && error.response && error.response.status === 401) {

        }
        console.log(error, "error");
        return error;
    }
};

export const putMethodJSON = async (
    url,
    requestData,
    params,
    header,
    domainName
) => {
    try {
        const response = await axios({
            method: "put",
            url: domainName ? domainName + url : "",
            data: requestData,
            params: params ? params : "",
            headers: header ? header : defaultHeader
        });
        return response;
    } catch (error) {
        if (error && error.response && error.response.status === 401) {

        }
        return error;
    }
};

const transformRequest = (jsonData = {}) =>
    Object.entries(jsonData)
        .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join("&");

