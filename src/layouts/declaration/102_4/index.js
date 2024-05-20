
import React, { useEffect, useState } from 'react';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";



// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


function Form() {


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>
    Кабинет налогоплательщика 3.0 - Единая налоговая декларация физического
    лица, осуществляющего предпринимательскую деятельность (01.01.2022 -) (FORM
    STI-102_4)
  </title>
  <link href="/css/nunito_fonts.css" rel="stylesheet" />
  <link href="/css/lite-purple.min.css" rel="stylesheet" />
  <link href="/css/report-styles.css" rel="stylesheet" />
  <link href="/css/perfect-scrollbar.min.css" rel="stylesheet" />
  <link href="/lib/sweetalert/dist/sweetalert.css" rel="stylesheet" />
  <link href="/lib/Ladda/ladda-themeless.min.css" rel="stylesheet" />
  <link href="/lib/select2/css/select2.min.css" rel="stylesheet" />
  <link
    href="/lib/select2-bootstrap-theme/select2-bootstrap.css"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.2.0/css/datepicker.min.css"
    rel="stylesheet"
  />
  <link href="/css/fancy-pdf.css" rel="stylesheet" />
  <link href="/lib/fancybox/jquery.fancybox.min.css" rel="stylesheet" />
  <link href="/css/loading-overlay.css" rel="stylesheet" />
  <div className="app-admin-wrap layout-sidebar-large">
    <div className="main-header">
      <div className="logo">
        <a href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="menu-toggle">
        <div />
        <div />
        <div />
      </div>
      <div style={{ margin: "auto" }} />
      <div className="header-part-right">
        <div className="dropdown">
          <div className="user col align-self-end">
            <img
              src="/images/avatar.png"
              id="userDropdown"
              alt=""
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <div className="dropdown-header">
                <label className="font-weight-bold">ИНН: </label>23004200250255
              </div>
              <div className="dropdown-header">
                <label className="font-weight-bold">ФИО: </label>Рахманбердиев
                Калысбек Ажибекович
              </div>
              <a className="dropdown-item" href="/account/changepassword">
                Изменить пароль
              </a>
              <a className="dropdown-item" href="/account/logout">
                Выход
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="side-content-wrap">
      <div
        className="sidebar-left open rtl-ps-none"
        data-perfect-scrollbar=""
        data-suppress-scroll-x="true"
      >
        <ul className="navigation-left">
          <li className="nav-item ">
            <a className="nav-item-hold" href="/">
              <i className="nav-icon i-Posterous" />
              <span className="nav-text">Модули</span>
            </a>
            <div className="triangle" />
          </li>
          <li className="nav-item ">
            <a className="nav-item-hold" href="/report/declaration">
              <i className="nav-icon i-Letter-Open" />
              <span className="nav-text">Е-отчеты</span>
            </a>
            <div className="triangle" />
          </li>
          <li className="nav-item ">
            <a className="nav-item-hold" href="/service">
              <i className="nav-icon i-Download-from-Cloud" />
              <span className="nav-text">Сервисы</span>
            </a>
            <div className="triangle" />
          </li>
          <li className="nav-item ">
            <a className="nav-item-hold" href="/estate">
              <i className="nav-icon i-Management" />
              <span className="nav-text">Имущество</span>
            </a>
            <div className="triangle" />
          </li>
          <li className="nav-item ">
            <a
              className="nav-item-hold"
              href="/correspondence/certificate/home"
            >
              <i className="nav-icon i-Post-Mail-2" />
              <span className="nav-text">Переписка с ГНС</span>
            </a>
            <div className="triangle" />
          </li>
          <li className="nav-item">
            <a className="nav-item-hold" href="/payment">
              <i className="nav-icon i-File-Clipboard-File--Text" />
              <span className="nav-text">Уплата налога</span>
            </a>
            <div className="triangle" />
          </li>
          <li className="nav-item ">
            <a
              className="nav-item-hold"
              href="/organizationstoken/organizationtoken"
            >
              <i className="nav-icon i-Key-3" />
              <span className="nav-text">Генерация токена</span>
            </a>
            <div className="triangle" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="main-content-wrap sidenav-open d-flex flex-column pb-5">
    <div className="main-content">
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="/report">Главная</a>
          </li>
          <li>
            Единая налоговая декларация физического лица, осуществляющего
            предпринимательскую деятельность (01.01.2022 -) (FORM STI-102_4)
          </li>
        </ul>
      </div>
      <div className="separator-breadcrumb border-top" />
      <div>
        <form
          method="post"
          autoComplete="off"
          id="FormId"
          action="/report/sti102declaration/createform4"
        >
          <input type="hidden" name="Specified" id="Specified" />
          <div className="d-inline-flex mb-3">
            <div className="bg-color-dollar d-inline rounded px-1 mr-2 text-center">
              <span className="text-white">001</span>
            </div>
            <div className="d-inline">
              <span className="text-dark">Тип документа</span>
            </div>
            <div className="form-check form-check-inline ml-4">
              <input
                name="Model.Specified"
                defaultChecked=""
                className="form-check-input"
                type="radio"
                id="inlineRadio1"
                defaultValue="Initial"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Первоначальный
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="Model.Specified"
                className="form-check-input"
                type="radio"
                id="inlineRadio2"
                defaultValue="Correction"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Уточненный
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                name="Model.Specified"
                className="form-check-input"
                type="radio"
                id="inlineRadio3"
                defaultValue="Liquadation"
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Ликвидационный
              </label>
            </div>
          </div>
          <link href="/lib/select2/css/select2.min.css" rel="stylesheet" />
          <link
            href="/lib/select2-bootstrap-theme/select2-bootstrap.css"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .input-validation-error {\n        border: 1px solid red;\n    }\n"
            }}
          />
          <div className="p-4 partial-block">
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="Tin">ИНН</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      102
                    </span>
                  </div>
                  <input
                    name="TPInfo.Tin"
                    className="form-control"
                    defaultValue={23004200250255}
                    readOnly=""
                    type="text"
                    id="Tin"
                  />
                  <span
                    className="text-danger field-validation-valid"
                    data-valmsg-for="Tin"
                    data-valmsg-replace="true"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Name">Наименование плательщика</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      103
                    </span>
                  </div>
                  <input
                    name="TPInfo.Name"
                    className="form-control"
                    defaultValue="Рахманбердиев Калысбек Ажибекович"
                    readOnly=""
                    type="text"
                    id="Name"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="RayonCode">Код УГНС</label>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-primary text-white">
                        104
                      </span>
                    </div>
                    <select
                      name="TPInfo.RayonCode"
                      className="search-select form-control"
                      id="RayonCode"
                    >
                      <option value="">Выберите налоговый орган</option>
                      <option value="00_">00_ - Центральный аппарат</option>
                      <option value={1}>001 - Октябрьский р-н</option>
                      <option selected="selected" value={2}>
                        002 - Ленинский р-н
                      </option>
                      <option value={3}>003 - Свердловский р-н</option>
                      <option value={4}>004 - Первомайский р-н</option>
                      <option value={5}>005 - Аламудунский р-н</option>
                      <option value={7}>007 - Кеминский р-н</option>
                      <option value={8}>008 - Иссыкатинский р-н</option>
                      <option value={9}>009 - Жайылский р-н</option>
                      <option value={10}>010 - Московский р-н</option>
                      <option value={11}>011 - Панфиловский р-н</option>
                      <option value={12}>012 - Сокулукский р-н</option>
                      <option value={13}>013 - Чуйский р-н</option>
                      <option value={14}>014 - Иссыккульский р-н</option>
                      <option value={15}>015 - Аксуйский р-н</option>
                      <option value={16}>016 - Тонский р-н</option>
                      <option value={17}>017 - Жетиогузский р-н</option>
                      <option value={18}>018 - Тюпский р-н</option>
                      <option value={19}>019 - г.Каракол</option>
                      <option value={20}>020 - г.Балыкчы</option>
                      <option value={21}>021 - Алайский р-н</option>
                      <option value={22}>022 - Чоналайский р-н</option>
                      <option value={23}>023 - Араванский р-н</option>
                      <option value={24}>024 - Баткенский р-н</option>
                      <option value={25}>025 - Карасууйский р-н</option>
                      <option value={26}>026 - Лейлекский р-н</option>
                      <option value={27}>027 - Ноокатский р-н</option>
                      <option value={28}>028 - Каракульджинский р-н</option>
                      <option value={29}>029 - Узгенский р-н</option>
                      <option value={30}>030 - Кадамжайский р-н</option>
                      <option value={31}>031 - г.Кызыл-Кия</option>
                      <option value={32}>032 - г.Ош</option>
                      <option value={33}>033 - г.Сулюкта</option>
                      <option value={34}>034 - Акталинский р-н</option>
                      <option value={35}>035 - Атбашинский р-н</option>
                      <option value={36}>036 - Кочкорский р-н</option>
                      <option value={37}>037 - Жумгальский р-н</option>
                      <option value={38}>038 - Нарынский р-н</option>
                      <option value={39}>039 - Сузакский р-н</option>
                      <option value={40}>040 - Ноокенский р-н</option>
                      <option value={41}>041 - Алабукинский р-н</option>
                      <option value={42}>042 - Токтогульский р-н</option>
                      <option value={43}>043 - Аксыйский р-н</option>
                      <option value={44}>044 - Тогузтороузский р-н</option>
                      <option value={45}>045 - Базаркоргонский р-н</option>
                      <option value={47}>047 - Чаткальский р-н</option>
                      <option value={48}>048 - г.Джалал-Абад</option>
                      <option value={49}>049 - г.Таш-Кумыр</option>
                      <option value={50}>050 - г.Майлы-Суу</option>
                      <option value={52}>052 - г.Кара-Куль</option>
                      <option value={53}>053 - Таласский р-н</option>
                      <option value={54}>054 - Бакайатинский р-н</option>
                      <option value={55}>055 - Айтматовский р-н</option>
                      <option value={56}>056 - Манасский р-н</option>
                      <option value={57}>057 - г.Талас</option>
                      <option value={58}>058 - г. Токмок</option>
                      <option value={59}>059 - г. Нарын</option>
                      <option value={60}>060 - г. Баткен</option>
                      <option value={992}>
                        992 - УГНС по ЦОП города Ош и Ошской области
                      </option>
                      <option value={993}>
                        993 - Управление ГНС по работе с неучтенными товарами в
                        рамках торговли ЕАЭС
                      </option>
                      <option value={994}>994 - УГНС по ЦОП г. Бишкек</option>
                      <option value={995}>
                        995 - УГНС по Государственному регулированию и контроля
                        алкогольного рынка и оборота табачных изделий по г.
                        Бишкек, северному и южному регионам
                      </option>
                      <option value={996}>
                        996 - УГНС по работе с косвенными налогами в рамках ЕАЭС
                        по Чуйской и Таласской областям
                      </option>
                      <option value={997}>997 - УККН ЮГ</option>
                      <option value={998}>
                        998 - УГНС по контролю за субъектами СЭЗ г. Бишкек
                      </option>
                      <option value={999}>
                        999 - УККН по городу Бишкек и Северному региону
                      </option>
                    </select>
                    <span
                      className="text-danger field-validation-valid"
                      data-valmsg-for="RayonCode"
                      data-valmsg-replace="true"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="RayonName">Наименование района</label>
                <input
                  name="TPInfo.RayonName"
                  className="form-control"
                  readOnly=""
                  type="text"
                  id="RayonName"
                  defaultValue="Ленинский р-н"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="PassportData">Серия и № Паспорта</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      106
                    </span>
                  </div>
                  <input
                    name="TPInfo.PassportData"
                    className="form-control"
                    defaultValue="ID1058411"
                    type="text"
                    id="PassportData"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="PassportCountry">Страна выдачи</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      107
                    </span>
                  </div>
                  <input
                    name="TPInfo.PassportCountry"
                    className="form-control"
                    defaultValue=""
                    type="text"
                    id="PassportCountry"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="PhoneNumber">Телефон(Дом.Раб.)</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      115
                    </span>
                  </div>
                  <input
                    name="TPInfo.PhoneNumber"
                    className="form-control"
                    defaultValue="0312311484, 05551031, 0500177009"
                    type="text"
                    id="PhoneNumber"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Email">Адрес электронной почты</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      116
                    </span>
                  </div>
                  <input
                    name="TPInfo.Email"
                    className="form-control"
                    defaultValue=""
                    type="text"
                    id="Email"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Zip">Почтовый индекс</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      108
                    </span>
                  </div>
                  <input
                    name="TPInfo.Zip"
                    className="form-control"
                    defaultValue="      "
                    type="text"
                    id="Zip"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="DistrictAddress">
                  Область, Город/Область. район, Село
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      110
                    </span>
                  </div>
                  <input
                    name="TPInfo.DistrictAddress"
                    className="form-control"
                    defaultValue="Таласская обл., г. Талас"
                    type="text"
                    id="DistrictAddress"
                  />
                </div>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="StreetAddress">
                  Улица/микрорайон, и Номер Дома/Квартиры
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      111
                    </span>
                  </div>
                  <input
                    name="TPInfo.StreetAddress"
                    className="form-control"
                    defaultValue="улица Манас, дом 16"
                    type="text"
                    id="StreetAddress"
                  />
                </div>
              </div>
              <input
                name="TPInfo.LegalFormCode"
                className="form-control"
                defaultValue="ип"
                hidden="hidden"
                type="text"
                id="LegalFormCode"
              />
            </div>
          </div>
          <link href="/lib/select2/css/select2.min.css" rel="stylesheet" />
          <link
            href="/lib/select2-bootstrap-theme/select2-bootstrap.css"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .input-validation-error {\n        border: 1px solid red;\n    }\n"
            }}
          />
          <div className="my-4 p-4 rounded-20px bg-white">
            <div className="row my-3">
              <div className="col-md-12">
                <h4 className="font-weight-bold">
                  Фактическое местонахождение
                </h4>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Declaration_PART2_STI102X112">
                  Почтовый индекс
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      112
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    id="Declaration_PART2_STI102X112"
                    name="Declaration.PART2.STI102X112"
                    defaultValue=""
                  />
                </div>
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Declaration.PART2.STI102X112"
                  data-valmsg-replace="true"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Declaration_PART2_STI102X113">
                  Область, Город/Область, Район, Село
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      113
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    id="Declaration_PART2_STI102X113"
                    name="Declaration.PART2.STI102X113"
                    defaultValue=""
                  />
                </div>
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Declaration.PART2.STI102X113"
                  data-valmsg-replace="true"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="Declaration_PART2_STI102X114">
                  Улица/микрорайон, и Номер Дома/Квартиры
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">
                      114
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    id="Declaration_PART2_STI102X114"
                    name="Declaration.PART2.STI102X114"
                    defaultValue=""
                  />
                </div>
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Declaration.PART2.STI102X114"
                  data-valmsg-replace="true"
                />
              </div>
            </div>
            <div className="my-4 p-2 pt-4 rounded-20px bg-white">
              <input type="hidden" name="Year" id="Year" />
              <input
                type="hidden"
                name="EndDateLiquidation"
                id="EndDateLiquidation"
              />
              <input type="hidden" name="YearQuarter" id="YearQuarter" />
              <input type="hidden" name="PeriodDate" id="PeriodDate" />
              <div className="col-12 d-flex mb-5 align-items-center">
                <div className="col-3 pt-2 pl-0">
                  <label className="text-16 pl-0">
                    Налоговый период (201 - 202)
                  </label>
                </div>
                <div className="col-md-7 d-flex mt-3 align-items-center">
                  <div className="col-4">
                    <input
                      placeholder="Выберите год"
                      className="form-control"
                      id="datepicker"
                      defaultValue={2023}
                    />
                  </div>
                  С
                  <div className="col-md-4">
                    <input
                      id="startDate"
                      className="form-control month"
                      disabled=""
                    />
                  </div>{" "}
                  ПО
                  <div className="col-md-4">
                    <input
                      id="endDate"
                      className="form-control month"
                      disabled=""
                    />
                    <span
                      className="text-danger field-validation-valid"
                      data-valmsg-for="endDateLiquidation"
                      data-valmsg-replace="true"
                    />
                  </div>
                  <div className="col-md-4">
                    <span
                      className="text-danger field-validation-valid"
                      data-valmsg-for="year"
                      data-valmsg-replace="true"
                    />
                  </div>
                </div>
              </div>
              <link href="/lib/select2/css/select2.min.css" rel="stylesheet" />
              <link
                href="/lib/select2-bootstrap-theme/select2-bootstrap.css"
                rel="stylesheet"
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .input-validation-error {\n        border: 1px solid red;\n    }\n"
                }}
              />
              <div className="col-md-12 pl-0">
                <div className="d-flex col-12 pl-0 mt-4">
                  <div className="col-md-5">
                    <h5 hidden="" className="font-weight">
                      Порядок исчисления налоговой базы (Укажите «Х» в
                      соответствующей ячейке)
                    </h5>
                  </div>
                  <div className="col-md-1">
                    <div className="form-check form-check-inline ">
                      <input
                        hidden=""
                        defaultChecked=""
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio1"
                        defaultValue={1}
                        data-val="true"
                        data-val-required="The STI102X1002 field is required."
                        name="Declaration.PART2.STI102X1002"
                      />
                      <label
                        hidden=""
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Общий{" "}
                      </label>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X1002"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check form-check-inline">
                      <input
                        hidden=""
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio2"
                        defaultValue={2}
                        name="Declaration.PART2.STI102X1002"
                      />
                      <label
                        hidden=""
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Упрощенный{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-12 pl-0 mt-4">
                  <div className="col-md-5">
                    <h5 className="font-weight">
                      Метод введения бухгалтерского учета (Укажите «Х» в
                      соответствующей ячейке)
                    </h5>
                  </div>
                  <div className="col-md-1">
                    <div className="form-check form-check-inline ">
                      <input
                        defaultChecked=""
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio1_1"
                        defaultValue={1}
                        data-val="true"
                        data-val-required="The STI102X1001 field is required."
                        name="Declaration.PART2.STI102X1001"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1_1"
                      >
                        МСФО
                      </label>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X1001"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio1_2"
                        defaultValue={2}
                        name="Declaration.PART2.STI102X1001"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1_2"
                      >
                        МСФО для малого, среднего предпринимательства
                      </label>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio1_3"
                        defaultValue={3}
                        name="Declaration.PART2.STI102X1001"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1_3"
                      >
                        Упрощенный учет
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-12 pl-0 mt-4">
                  <div className="col-md-5">
                    <h5 className="font-weight">
                      Наличие налоговой политики (Укажите «Х» в соответствующей
                      ячейке)
                    </h5>
                  </div>
                  <div className="col-md-1">
                    <div className="form-check form-check-inline ">
                      <input
                        defaultChecked=""
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio3_1"
                        defaultValue={1}
                        data-val="true"
                        data-val-required="The STI102X1003 field is required."
                        name="Declaration.PART2.STI102X1003"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3_1"
                      >
                        Да{" "}
                      </label>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X1003"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio3_2"
                        defaultValue={2}
                        name="Declaration.PART2.STI102X1003"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3_2"
                      >
                        Нет{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-12 pl-0 mt-4">
                  <div className="col-md-5">
                    <h5 className="font-weight">
                      Метод налогового учета доходов и расходов (Укажите «Х» в
                      соответствующей ячейке)
                    </h5>
                  </div>
                  <div className="col-md-1">
                    <div className="form-check form-check-inline ">
                      <input
                        defaultChecked=""
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio4_1"
                        defaultValue={1}
                        data-val="true"
                        data-val-required="The STI102X1004 field is required."
                        name="Declaration.PART2.STI102X1004"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4_1"
                      >
                        Метод начисления{" "}
                      </label>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X1004"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio4_2"
                        defaultValue={2}
                        name="Declaration.PART2.STI102X1004"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4_2"
                      >
                        Кассовый метод{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5 md-5">
                  <div className="mt-4">
                    <h4 className="font-weight-bold">
                      Раздел II. Налог на прибыль
                    </h4>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Облагаемые доходы (переносится показатель ячейки 179
                      приложение 1 (FORM STI -102-001))
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            050
                          </span>
                        </div>
                        <input
                          id="sTI102_4X050"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X050 must be a number."
                          data-val-required="The STI102X050 field is required."
                          name="Declaration.PART2.STI102X050"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X050"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Расходы, подлежающие вычету (переносится показатель ячейки
                      219 приложения 2 (FORM STI -102-002))
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            051
                          </span>
                        </div>
                        <input
                          id="sTI102_4X051"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X051 must be a number."
                          data-val-required="The STI102X051 field is required."
                          name="Declaration.PART2.STI102X051"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X051"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Прибыль(+)/убыток(-) (=050-051)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            052
                          </span>
                        </div>
                        <input
                          id="sTI102_4X052"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X052 must be a number."
                          data-val-required="The STI102X052 field is required."
                          name="Declaration.PART2.STI102X052"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X052"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Прибыль, освобожденная от налога(переносится показатель
                      ячейки 230 приложения 2 FORM STI -102-002)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            053
                          </span>
                        </div>
                        <input
                          id="sTI102_4X053"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X053 must be a number."
                          data-val-required="The STI102X053 field is required."
                          name="Declaration.PART2.STI102X053"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X053"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Убыток, подлежащий переносу (переносится показатель ячейки
                      406 приложения 4 (FORM STI -102-004)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            054
                          </span>
                        </div>
                        <input
                          id="sTI102_4X054"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X054 must be a number."
                          data-val-required="The STI102X054 field is required."
                          name="Declaration.PART2.STI102X054"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X054"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Налогооблагаемая прибыль(+)/убыток(-) (=052-053-054)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            055
                          </span>
                        </div>
                        <input
                          id="sTI102_4X055"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X055 must be a number."
                          data-val-required="The STI102X055 field is required."
                          name="Declaration.PART2.STI102X055"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X055"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Убыток (если значение отрицательное = 55)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            056
                          </span>
                        </div>
                        <input
                          id="sTI102_4X056"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X056 must be a number."
                          data-val-required="The STI102X056 field is required."
                          name="Declaration.PART2.STI102X056"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X056"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">Ставка налога</label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            057
                          </span>
                        </div>
                        <input
                          id="sTI102_4X057"
                          className="form-control"
                          type="number"
                          data-val="true"
                          data-val-required="The STI102X057 field is required."
                          name="Declaration.PART2.STI102X057"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X057"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Сумма налогового обязательства (= 055 * 057 / 100)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            058
                          </span>
                        </div>
                        <input
                          id="sTI102_4X058"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X058 must be a number."
                          data-val-required="The STI102X058 field is required."
                          name="Declaration.PART2.STI102X058"
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10 ">
                      Начисленная предварительная сумма налога на прибыль
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            059
                          </span>
                        </div>
                        <input
                          id="sTI102_4X059"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X059 must be a number."
                          data-val-required="The STI102X059 field is required."
                          name="Declaration.PART2.STI102X059"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X057"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10">
                      <label className="font-weight ">
                        Сумма налога, уплаченная в иностранном государстве и
                        подлежащая зачету
                      </label>
                    </div>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            060
                          </span>
                        </div>
                        <input
                          id="sTI102_4X060"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X060 must be a number."
                          data-val-required="The STI102X060 field is required."
                          name="Declaration.PART2.STI102X060"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X060"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Сумма расходов на приобретение ккм или устройство передачи
                      фискальных данных в размере, не превышающем 100-кратного
                      расчетного показателя
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            061
                          </span>
                        </div>
                        <input
                          id="sTI102_4X061"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X061 must be a number."
                          data-val-required="The STI102X061 field is required."
                          name="Declaration.PART2.STI102X061"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X061"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Остаток (=058-059- 060-061)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            062
                          </span>
                        </div>
                        <input
                          id="sTI102_4X062"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X062 must be a number."
                          data-val-required="The STI102X062 field is required."
                          name="Declaration.PART2.STI102X062"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X062"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Налог к возврату (если значение отрицательное = 062)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            063
                          </span>
                        </div>
                        <input
                          id="sTI102_4X063"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X063 must be a number."
                          data-val-required="The STI102X063 field is required."
                          name="Declaration.PART2.STI102X063"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X063"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Налог к уплате (если значение положительное=062)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            064
                          </span>
                        </div>
                        <input
                          id="sTI102_4X064"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X064 must be a number."
                          data-val-required="The STI102X064 field is required."
                          name="Declaration.PART2.STI102X064"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X064"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Доход после уплаты налога на прибыль (= 055 - 058)
                      показатель ячейки 065 переносится в ячейку 750 приложения
                      8 (form sti -102-008)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            065
                          </span>
                        </div>
                        <input
                          id="sTI102_4X065"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X065 must be a number."
                          data-val-required="The STI102X065 field is required."
                          name="Declaration.PART2.STI102X065"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X065"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-5 md-5 ">
                  <h4 className="font-weight-bold">
                    {" "}
                    Раздел III. Подоходный налог
                  </h4>
                  <div className="row mt-4">
                    <label className="col-md-10">
                      Облагаемые доходы (переносится показатель ячейки 549
                      приложения 5 (form sti -102-005)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            070
                          </span>
                        </div>
                        <input
                          id="sTI102_4X070"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X070 must be a number."
                          data-val-required="The STI102X070 field is required."
                          name="Declaration.PART2.STI102X070"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X070"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Персональный вычет (в размере 6.5 расчетных показателей за
                      каждый месяц налогового периода)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            071
                          </span>
                        </div>
                        <input
                          id="sTI102_4X071"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X071 must be a number."
                          data-val-required="The STI102X071 field is required."
                          name="Declaration.PART2.STI102X071"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X071"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Вычеты на иждивенцев налогоплательщика (в размере одного
                      расчетного показателя на каждого иждивенца за каждый месяц
                      налогового периода)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            072
                          </span>
                        </div>
                        <input
                          id="sTI102_4X072"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X072 must be a number."
                          data-val-required="The STI102X072 field is required."
                          name="Declaration.PART2.STI102X072"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X072"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Отчисления по государственному социальному страхованию
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            073
                          </span>
                        </div>
                        <input
                          id="sTI102_4X073"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X073 must be a number."
                          data-val-required="The STI102X073 field is required."
                          name="Declaration.PART2.STI102X073"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X073"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Вычет по расходам на негосударственное пенсионное
                      страхование, социальный и имущественный вычеты
                      (переносится показатель ячейки 621 приложения 6 (form sti
                      -102-006)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            074
                          </span>
                        </div>
                        <input
                          id="sTI102_4X074"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X074 must be a number."
                          data-val-required="The STI102X074 field is required."
                          name="Declaration.PART2.STI102X074"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X074"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Вычеты – всего (= 071 + 072 + 073 + 074)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            075
                          </span>
                        </div>
                        <input
                          id="sTI102_4X075"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X075 must be a number."
                          data-val-required="The STI102X075 field is required."
                          name="Declaration.PART2.STI102X075"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X075"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Налогооблагаемый доход (=070-075) (если значение данной
                      ячейки отрицательное, то в ячейках 077 и 078, указывается
                      цифра «о»)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            076
                          </span>
                        </div>
                        <input
                          id="sTI102_4X076"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X076 must be a number."
                          data-val-required="The STI102X076 field is required."
                          name="Declaration.PART2.STI102X076"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X076"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Ставка подоходного налога
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            077
                          </span>
                        </div>
                        <select
                          id="sTI102_4X077"
                          className="form-control"
                          data-val="true"
                          data-val-required="The STI102X077 field is required."
                          name="Declaration.PART2.STI102X077"
                        >
                          <option value={0} selected="selected">
                            0%
                          </option>
                          <option value={-1}>Смешанная</option>
                          <option value={5}>5%</option>
                          <option value={10} selected="">
                            10%
                          </option>
                        </select>
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X077"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Сумма подоходного налога (= 076 х 077 / 100)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            078
                          </span>
                        </div>
                        <input
                          id="sTI102_4X078"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X078 must be a number."
                          data-val-required="The STI102X078 field is required."
                          name="Declaration.PART2.STI102X078"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X078"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Сумма подоходного налога, удержанная налоговыми агентами
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            079
                          </span>
                        </div>
                        <input
                          id="sTI102_4X079"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X079 must be a number."
                          data-val-required="The STI102X079 field is required."
                          name="Declaration.PART2.STI102X079"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X079"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Сумма подоходного налога, уплаченная в иностранном
                      государстве и подлежащая зачету
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            080
                          </span>
                        </div>
                        <input
                          id="sTI102_4X080"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X080 must be a number."
                          data-val-required="The STI102X080 field is required."
                          name="Declaration.PART2.STI102X080"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X080"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">Разница (=078-079-080)</label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            081
                          </span>
                        </div>
                        <input
                          id="sTI102_4X081"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X081 must be a number."
                          data-val-required="The STI102X081 field is required."
                          name="Declaration.PART2.STI102X081"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X081"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Подоходный налог к возврату(если значение отрицательное) (
                      = 081)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            082
                          </span>
                        </div>
                        <input
                          id="sTI102_4X082"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X082 must be a number."
                          data-val-required="The STI102X082 field is required."
                          name="Declaration.PART2.STI102X082"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X082"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Подоходный налог к уплате(если значение положительное) ( =
                      081)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            083
                          </span>
                        </div>
                        <input
                          id="sTI102_4X083"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X083 must be a number."
                          data-val-required="The STI102X083 field is required."
                          name="Declaration.PART2.STI102X083"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X083"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Сумма подоходного налога, уплаченная налогоплательщиком в
                      бюджет
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            084
                          </span>
                        </div>
                        <input
                          id="sTI102_4X084"
                          className="floatNumberField form-control"
                          type="number"
                          data-val="true"
                          data-val-number="The field STI102X084 must be a number."
                          data-val-required="The STI102X084 field is required."
                          name="Declaration.PART2.STI102X084"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X084"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-md-10">
                      Доход после уплаты отчислений по государственному
                      социальному страхованию в негосударственный пенсионный
                      фонд и подоходного налога (= 070 – 073 – 078) показатель
                      ячейки 085 переносится в ячейку 760 приложения 8 (form sti
                      -102-008)
                    </label>
                    <div className="form-group col-md-2">
                      <div className="input-group ">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">
                            085
                          </span>
                        </div>
                        <input
                          id="sTI102_4X085"
                          className="floatNumberField form-control"
                          type="number"
                          readOnly=""
                          data-val="true"
                          data-val-number="The field STI102X085 must be a number."
                          data-val-required="The STI102X085 field is required."
                          name="Declaration.PART2.STI102X085"
                          defaultValue={0}
                        />
                      </div>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Declaration.PART2.STI102X085"
                        data-valmsg-replace="true"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pl-3  pt-4">
                    <label>
                      Представлены приложения к единой налоговой декларации
                      физического лица, осуществляющего предпринимательскую
                      деятельность (Укажите знак «Х» в соответствующей ячейке):
                    </label>
                  </div>
                  <div className="d-flex  align-items-center align-content-start col-md-9 pl-2">
                    <div className="row col-md-5 pl-0  pt-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail1"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail1'))"
                          data-val="true"
                          data-val-required="The STI101X1 field is required."
                          name="Declaration.PART2.STI101X1"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Приложение 1 (FORM STI -102-001)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail2"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail2'))"
                          data-val="true"
                          data-val-required="The STI101X2 field is required."
                          name="Declaration.PART2.STI101X2"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Приложение 2 (FORM STI -102-002)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail3"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail3'))"
                          data-val="true"
                          data-val-required="The STI101X3 field is required."
                          name="Declaration.PART2.STI101X3"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Приложение 3 (FORM STI -102-003)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_2DeclDetail4"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail4'))"
                          data-val="true"
                          data-val-required="The STI101X4 field is required."
                          name="Declaration.PART2.STI101X4"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_2DeclDetail4_2"
                          data-val="true"
                          data-val-required="The STI101X4_2 field is required."
                          name="Declaration.PART2.STI101X4_2"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Приложение 4 (FORM STI -102-004)
                        </label>
                      </div>
                    </div>
                    <div className="col-md-5 pl-0  pt-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail5"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail5'))"
                          data-val="true"
                          data-val-required="The STI101X5 field is required."
                          name="Declaration.PART2.STI101X5"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Приложение 5 (FORM STI -102-005)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail6"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail6'))"
                          data-val="true"
                          data-val-required="The STI101X6 field is required."
                          name="Declaration.PART2.STI101X6"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Приложение 6 (FORM (STI -102-006)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail7"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail7')); checkBoxDetail7();"
                          data-val="true"
                          data-val-required="The STI101X7 field is required."
                          name="Declaration.PART2.STI101X7"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_4DeclDetail7_1"
                          data-val="true"
                          data-val-required="The STI101X7_1 field is required."
                          name="Declaration.PART2.STI101X7_1"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_4DeclDetail7_2"
                          data-val="true"
                          data-val-required="The STI101X7_2 field is required."
                          name="Declaration.PART2.STI101X7_2"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_4DeclDetail7_3"
                          data-val="true"
                          data-val-required="The STI101X7_3 field is required."
                          name="Declaration.PART2.STI101X7_3"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_4DeclDetail7_4"
                          data-val="true"
                          data-val-required="The STI101X7_4 field is required."
                          name="Declaration.PART2.STI101X7_4"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_4DeclDetail7_5"
                          data-val="true"
                          data-val-required="The STI101X7_5 field is required."
                          name="Declaration.PART2.STI101X7_5"
                          defaultValue="true"
                        />
                        <input
                          hidden=""
                          type="checkbox"
                          id="STI102_4DeclDetail7_6"
                          data-val="true"
                          data-val-required="The STI101X7_6 field is required."
                          name="Declaration.PART2.STI101X7_6"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Приложение 7 (FORM STI -102-007)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="STI102_4DeclDetail8"
                          onclick="LoadSTI102_4DeclDetail(this, $('#_STI102_4DeclarationDetail8'))"
                          data-val="true"
                          data-val-required="The STI101X8 field is required."
                          name="Declaration.PART2.STI101X8"
                          defaultValue="true"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Приложение 8 (FORM STI -102-008)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail1">
                    <div id="app1" className="col-md-12 mt-5">
                      <h4 className="font-weight-bold">
                        Приложение 1 «Совокупный годовой доход физического лица,
                        осуществляющего предпринимательскую деятельность»
                      </h4>
                      <h5 className="font-weight-bold">
                        Раздел I. Облагаемые доходы
                      </h5>
                      <div className="row mt-5">
                        <label className="col-md-10">
                          Выручка от реализации товаров, работ, услуг, за
                          исключением выручки от реализации основных средств,
                          включенных в налоговую группу в целях налоговой
                          амортизации
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                150
                              </span>
                            </div>
                            <input
                              id="sTI102_4X150"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X150 must be a number."
                              data-val-required="The STI102X150 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X150"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X150"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Выручка от реализации актива, не подлежащего
                          амортизации, за минусом стоимости его приобретения
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                151
                              </span>
                            </div>
                            <input
                              id="sTI102_4X151"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X151 must be a number."
                              data-val-required="The STI102X151 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X151"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X151"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход в размере стоимости материалов или иного
                          имущества, полученных при демонтаже или ликвидации
                          выводимого из эксплуатации актива
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                152
                              </span>
                            </div>
                            <input
                              id="sTI102_4X152"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X152 must be a number."
                              data-val-required="The STI102X152 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X152"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X152"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный за согласие ограничить или
                          прекратить экономическую деятельность
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                153
                              </span>
                            </div>
                            <input
                              id="sTI102_4X153"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X153 must be a number."
                              data-val-required="The STI102X153 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X153"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X153"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход в размере стоимости безмозмездно полученного
                          актива, включая виртуальные активы
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                154
                              </span>
                            </div>
                            <input
                              id="sTI102_4X154"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X154 must be a number."
                              data-val-required="The STI102X154 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X154"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X154"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Процентный доход</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                155
                              </span>
                            </div>
                            <input
                              id="sTI102_4X155"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X155 must be a number."
                              data-val-required="The STI102X155 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X155"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X155"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный по договорам в соответствии с
                          исламским финансированием{" "}
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                156
                              </span>
                            </div>
                            <input
                              id="sTI102_4X156"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X156 must be a number."
                              data-val-required="The STI102X156 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X156"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X156"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Дивиденды</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                157
                              </span>
                            </div>
                            <input
                              id="sTI102_4X157"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X157 must be a number."
                              data-val-required="The STI102X157 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X157"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X157"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Роялти</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                158
                              </span>
                            </div>
                            <input
                              id="sTI102_4X158"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X158 must be a number."
                              data-val-required="The STI102X158 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X158"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X158"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход в виде вознаграждений и компенсаций, полученных
                          за участие в управлении организации
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                159
                              </span>
                            </div>
                            <input
                              id="sTI102_4X159"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X159 must be a number."
                              data-val-required="The STI102X159 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X159"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X159"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Выручка от реализации услуг по аренде движимого и
                          недвижимого имущества
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                160
                              </span>
                            </div>
                            <input
                              id="sTI102_4X160"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X160 must be a number."
                              data-val-required="The STI102X160 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X160"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X160"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход от переоценки иностранной валюты за минусом
                          убытка от переоценки иностранной валюты
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                161
                              </span>
                            </div>
                            <input
                              id="sTI102_4X161"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X161 must be a number."
                              data-val-required="The STI102X161 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X161"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X161"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Субсидии</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                162
                              </span>
                            </div>
                            <input
                              id="sTI102_4X162"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X162 must be a number."
                              data-val-required="The STI102X162 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X162"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X162"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          сумма списания обязательств кредитором, за исключением
                          списания задолженности, принятого отдельным законом
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                163
                              </span>
                            </div>
                            <input
                              id="sTI102_4X163"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X163 must be a number."
                              data-val-required="The STI102X163 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X163"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X163"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Сумма сомнительных обязательств
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                164
                              </span>
                            </div>
                            <input
                              id="sTI102_4X164"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X164 must be a number."
                              data-val-required="The STI102X164 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X164"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X164"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Сумма исполнения обязательства налогоплательщика, в
                          том числе налогового обязательства, третьей стороной
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                165
                              </span>
                            </div>
                            <input
                              id="sTI102_4X165"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X165 must be a number."
                              data-val-required="The STI102X165 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X165"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X165"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Сумма превышения выручки от реализации виртуальных
                          активов над стоимостью приобретения
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                166
                              </span>
                            </div>
                            <input
                              id="sTI102_4X166"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X166 must be a number."
                              data-val-required="The STI102X166 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X166"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X166"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль, полученная от деятельности простого
                          товарищества
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                167
                              </span>
                            </div>
                            <input
                              id="sTI102_4X167"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X167 must be a number."
                              data-val-required="The STI102X167 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X167"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X167"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Другие облагаемые доходы
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                178
                              </span>
                            </div>
                            <input
                              id="sTI102_4X178"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X178 must be a number."
                              data-val-required="The STI102X178 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X178"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X178"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Всего: (=
                          150+151+152+153+154+155+156+157+158+159+160+161+162+163+164+165+166+167+178)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                179
                              </span>
                            </div>
                            <input
                              id="sTI102_4X179"
                              className="floatNumberField form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X179 must be a number."
                              data-val-required="The STI102X179 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X179"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X179"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <label className="font-weight">
                        Показатель ячейки 179 переносится в ячейку 050 единой
                        налоговой декларации физического лица, осуществляющего
                        предпринимательскую деятельность (FORM STI -102)
                      </label>
                      <h5 className="font-weight-bold mt-5">
                        Раздел II. необлагаемые доходы
                      </h5>
                      <div className="row mt-4">
                        <label className="col-md-10">
                          Дивиденды, полученные налогоплательщиками от участия в
                          отечественных организациях
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                180
                              </span>
                            </div>
                            <input
                              id="sTI102_4X180"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X180 must be a number."
                              data-val-required="The STI102X180 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X180"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X180"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Стоимость имущества, полученная простым товариществом
                          в качестве вклада товарищей, а также стоимость
                          имущества, полученная от партнеров по договору
                          шарика/убывающая мушарака в соответствии с исламским
                          финансированием без образования организации
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                181
                              </span>
                            </div>
                            <input
                              id="sTI102_4X181"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X181 must be a number."
                              data-val-required="The STI102X181 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X181"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X181"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Стоимость имущества, принятого доверительным
                          управляющим в доверительное управление
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                182
                              </span>
                            </div>
                            <input
                              id="sTI102_4X182"
                              className="floatNumberFields form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X182 must be a number."
                              data-val-required="The STI102X182 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X182"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X182"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Процентный доход и доход от прироста стоимости ценных
                          бумаг, находящихся на день реализации в листинге
                          фондовых бирж по наивысшей и следующей за наивысшей
                          категориям листингом
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                183
                              </span>
                            </div>
                            <input
                              id="sTI102_4X183"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X183 must be a number."
                              data-val-required="The STI102X183 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X183"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X183"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Другие необлагаемые доходы
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                198
                              </span>
                            </div>
                            <input
                              id="sTI102_4X198"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X198 must be a number."
                              data-val-required="The STI102X198 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X198"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X198"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Итого необлагаемые доходы (180+181+182+183+198)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                199
                              </span>
                            </div>
                            <input
                              id="sTI102_4X199"
                              className="floatNumberField form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X199 must be a number."
                              data-val-required="The STI102X199 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X199"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X199"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <span
                          className="text-danger field-validation-valid"
                          data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL1.STI102X199"
                          data-valmsg-replace="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail2">
                    <div id="app2" className="col-md-12 mt-5 ">
                      <h4 className="font-weight-bold">
                        Приложение 2 «расходы, подлежащие вычету» и «прибыль,
                        освобожденная от налога физического лица,
                        осуществляющего предпринимательскую деятельность»
                      </h4>
                      <h5 className="font-weight-bold">
                        Раздел I. Расходы, подлежащие вычету
                      </h5>
                      <div className="row mt-4">
                        <label className="col-md-10">
                          Расходы, связанные с получением дохода
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                200
                              </span>
                            </div>
                            <input
                              id="sTI102_4X200"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X200 must be a number."
                              data-val-required="The STI102X200 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X200"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X200"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Cуммы расходов в пределах технологических норм
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                201
                              </span>
                            </div>
                            <input
                              id="sTI102_4X201"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X201 must be a number."
                              data-val-required="The STI102X201 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X201"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X201"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Cуммы расходов при служебных командировках и по
                          представительским расходам
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                202
                              </span>
                            </div>
                            <input
                              id="sTI102_4X202"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X202 must be a number."
                              data-val-required="The STI102X202 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X202"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X202"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">расходы на обучение</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                203
                              </span>
                            </div>
                            <input
                              id="sTI102_4X203"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X203 must be a number."
                              data-val-required="The STI102X203 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X203"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X203"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Процентные расходы</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                204
                              </span>
                            </div>
                            <input
                              id="sTI102_4X204"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X204 must be a number."
                              data-val-required="The STI102X204 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X204"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X204"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Расходы на инновационную деятельность
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                205
                              </span>
                            </div>
                            <input
                              id="sTI102_4X205"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X205 must be a number."
                              data-val-required="The STI102X205 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X205"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X205"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Отчисления по государственному социальному страхованию
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                206
                              </span>
                            </div>
                            <input
                              id="sTI102_4X206"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X206 must be a number."
                              data-val-required="The STI102X206 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X206"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X206"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Убытки, возникающие при реализации ценных бумаг
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                207
                              </span>
                            </div>
                            <input
                              id="sTI102_4X207"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X207 must be a number."
                              data-val-required="The STI102X207 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X207"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X207"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Расходы на благотворительность
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                208
                              </span>
                            </div>
                            <input
                              id="sTI102_4X208"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X208 must be a number."
                              data-val-required="The STI102X208 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X208"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X208"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Налоги, подлежащие вычету
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                209
                              </span>
                            </div>
                            <input
                              id="sTI102_4X209"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X209 must be a number."
                              data-val-required="The STI102X209 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X209"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X209"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Убыток, полученный от деятельности простого
                          товарищества
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                210
                              </span>
                            </div>
                            <input
                              id="sTI102_4X210"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X210 must be a number."
                              data-val-required="The STI102X210 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X210"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X210"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Другие вычеты</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                218
                              </span>
                            </div>
                            <input
                              id="sTI102_4X218"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X218 must be a number."
                              data-val-required="The STI102X218 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X218"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X218"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          всего: (=
                          200+201+202+203+204+205+206+207+208+209+210+218)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                219
                              </span>
                            </div>
                            <input
                              id="sTI102_4X219"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X219 must be a number."
                              data-val-required="The STI102X219 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X219"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X219"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <label className="font-weight mt-3">
                        Показатель ячейки 219 переносится в ячейку 051 единой
                        налоговой декларации физического лица, осуществляющего
                        предпринимательскую деятельность (FORM STI -102)
                      </label>
                      <h5 className="font-weight-bold mt-3">
                        Раздел II. Прибыль, освобожденная от налога
                      </h5>
                      <div className="row mt-3">
                        <label className="col-md-10">
                          Прибыль индивидуальных предпринимателей, у которых
                          инвалиды (кроме лиц с инвалидностью 3 группы общего
                          заболевания) составляют не менее 50 % от общего числа
                          занятых, и их заработная плата составляет сумму не
                          менее 50 % от общего фонда оплаты труда
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                220
                              </span>
                            </div>
                            <input
                              id="sTI102_4X220"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X220 must be a number."
                              data-val-required="The STI102X220 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X220"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X220"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль сельскохозяйственного производителя
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                221
                              </span>
                            </div>
                            <input
                              id="sTI102_4X221"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X221 must be a number."
                              data-val-required="The STI102X221 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X221"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X221"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль новых производителей электрической и тепловой
                          энергии, газа и возобновляемого топлива в газообразном
                          состоянии, жидкого биологического топлива, полученных
                          в результате использования возобновляемых источников
                          энергии в течение 5 лет с момента ввода в эксплуатацию
                          объектов имущества энергетических установок на основе
                          использования возобновляемых источников энергии
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                222
                              </span>
                            </div>
                            <input
                              id="sTI102_4X222"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X222 must be a number."
                              data-val-required="The STI102X222 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X222"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X222"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль налогоплательщика, зарегистрированного и
                          осуществляющего деятельность в преференциальных
                          приграничных населенных пунктах
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                223
                              </span>
                            </div>
                            <input
                              id="sTI102_4X223"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X223 must be a number."
                              data-val-required="The STI102X223 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X223"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X223"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Другие виды прибыли, освобожденные от налога
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                229
                              </span>
                            </div>
                            <input
                              id="sTI102_4X229"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X229 must be a number."
                              data-val-required="The STI102X229 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X229"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X229"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Всего: (= 220+221+222+223+229) (показатель ячейки 230
                          переносится в ячейку 053 единой налоговой декларации
                          (form sti -102)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                230
                              </span>
                            </div>
                            <input
                              id="sTI102_4X230"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X230 must be a number."
                              data-val-required="The STI102X230 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X230"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL2.STI102X230"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail3">
                    <div id="app3" className="col-md-12 mt-5 md-5 py-5">
                      <h4 className="font-weight-bold">
                        Приложение 3 «Специальные налоговые режимы физического
                        лица, осуществляющего предпринимательскую деятельность»
                      </h4>
                      <h5 className="font-weight-bold">
                        Раздел I. Налог на основе патента
                      </h5>
                      <div className="row">
                        <label className="col-md-10">
                          Количество дней деятельности на основе патента
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                300
                              </span>
                            </div>
                            <input
                              id="sTI102_4X300"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X300 must be a number."
                              data-val-required="The STI102X300 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X300"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X300"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доходы, полученные от деятельности на основе патента
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                301
                              </span>
                            </div>
                            <input
                              id="sTI102_4X301"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X301 must be a number."
                              data-val-required="The STI102X301 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X301"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X301"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Расходы, связанные с деятельностью на основе патента
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                302
                              </span>
                            </div>
                            <input
                              id="sTI102_4X302"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X302 must be a number."
                              data-val-required="The STI102X302 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X302"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X302"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Разница между доходами и расходами (= 301 - 302)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                303
                              </span>
                            </div>
                            <input
                              id="sTI102_4X303"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X303 must be a number."
                              data-val-required="The STI102X303 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X303"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X303"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Сумма налога на основе патента
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                304
                              </span>
                            </div>
                            <input
                              id="sTI102_4X304"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X304 must be a number."
                              data-val-required="The STI102X304 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X304"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X304"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход после налогообложения (=303-304)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                305
                              </span>
                            </div>
                            <input
                              id="sTI102_4X305"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X305 must be a number."
                              data-val-required="The STI102X305 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X305"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X305"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold mt-3 ">
                        Раздел II. Единый налог
                      </h5>
                      <div className="row">
                        <label className="col-md-10">Выручка</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                306
                              </span>
                            </div>
                            <input
                              id="sTI102_4X306"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X306 must be a number."
                              data-val-required="The STI102X306 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X306"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X306"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Расходы</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                307
                              </span>
                            </div>
                            <input
                              id="sTI102_4X307"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X307 must be a number."
                              data-val-required="The STI102X307 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X307"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X307"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Разница между доходами и расходами (=306-307)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                308
                              </span>
                            </div>
                            <input
                              id="sTI102_4X308"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X308 must be a number."
                              data-val-required="The STI102X308 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X308"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X308"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Общая сумма Единого налога
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                309
                              </span>
                            </div>
                            <input
                              id="sTI102_4X309"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X309 must be a number."
                              data-val-required="The STI102X309 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X309"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X309"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход после налогообложения (=308-309)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                310
                              </span>
                            </div>
                            <input
                              id="sTI102_4X310"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X310 must be a number."
                              data-val-required="The STI102X310 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X310"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X310"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold mt-3">
                        Раздел III. Парк высоких технологий
                      </h5>
                      <div className="row">
                        <label className="col-md-10">
                          Фактически полученная выручка
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                311
                              </span>
                            </div>
                            <input
                              id="sTI102_4X311"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X311 must be a number."
                              data-val-required="The STI102X311 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X311"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X311"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Расходы</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                312
                              </span>
                            </div>
                            <input
                              id="sTI102_4X312"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X312 must be a number."
                              data-val-required="The STI102X312 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X312"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X312"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный от деятельности(=311-312)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                313
                              </span>
                            </div>
                            <input
                              id="sTI102_4X313"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X313 must be a number."
                              data-val-required="The STI102X313 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X313"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X313"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold mt-3">
                        Раздел IV. Налог на майнинг
                      </h5>
                      <div className="row">
                        <label className="col-md-10">
                          Начисленная сумма за электроэнергию, протребленную при
                          майнинге, включая ндс и нсп
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                314
                              </span>
                            </div>
                            <input
                              id="sTI102_4X314"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X314 must be a number."
                              data-val-required="The STI102X314 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X314"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X314"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Сумма налога</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                315
                              </span>
                            </div>
                            <input
                              id="sTI102_4X315"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X315 must be a number."
                              data-val-required="The STI102X315 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X315"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X315"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход полученный от деятельности
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                316
                              </span>
                            </div>
                            <input
                              id="sTI102_4X316"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X316 must be a number."
                              data-val-required="The STI102X316 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X316"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X316"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold mt-3">
                        Раздел V. Налог на деятельность в Сфере электронной
                        торговли
                      </h5>
                      <div className="row">
                        <label className="col-md-10">
                          Выручка от оказания услуг в электронной форме
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                317
                              </span>
                            </div>
                            <input
                              id="sTI102_4X317"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X317 must be a number."
                              data-val-required="The STI102X317 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X317"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X317"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Выручка от реализации товаров
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                318
                              </span>
                            </div>
                            <input
                              id="sTI102_4X318"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X318 must be a number."
                              data-val-required="The STI102X318 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X318"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X318"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Всего выручки (=317+318)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                319
                              </span>
                            </div>
                            <input
                              id="sTI102_4X319"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X319 must be a number."
                              data-val-required="The STI102X319 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X319"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X319"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Сумма налога</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                320
                              </span>
                            </div>
                            <input
                              id="sTI102_4X320"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X320 must be a number."
                              data-val-required="The STI102X320 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X320"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X320"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Расходы</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                321
                              </span>
                            </div>
                            <input
                              id="sTI102_4X321"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X321 must be a number."
                              data-val-required="The STI102X321 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X321"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X321"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход после налогообложения (=319-320)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                322
                              </span>
                            </div>
                            <input
                              id="sTI102_4X322"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X322 must be a number."
                              data-val-required="The STI102X322 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X322"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X322"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Всего доходов после налогообложения по специальным
                          режимам (=305+310+313+316+322)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                323
                              </span>
                            </div>
                            <input
                              id="sTI102_4X323"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X323 must be a number."
                              data-val-required="The STI102X323 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X323"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL3.STI102X323"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <label className="col-md-10">
                          Показатель ячейки 323 переносится в ячейку 752
                          приложения 8 единой налоговой декларации физического
                          лица, осуществляющего предпринимательскую деятельность
                          (form sti-102-008)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail4">
                    <div id="app4" className="col-md-12  mt-5">
                      <h4 className="font-weight-bold ">
                        Приложение 4 «Расшифровка отдельных показателей
                        экономической деятельности физического лица,
                        осуществляющего предпринимательскую деятельность»
                      </h4>
                      <h5 className="font-weight-bold">
                        Раздел I. Расшифровка переноса убытков, связанных с
                        экономической деятельностью
                      </h5>
                      <div className="mt-4 row">
                        <label className="col-md-10">
                          Остаток неперенесенного убытка на начало налогового
                          периода – всего
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                400
                              </span>
                            </div>
                            <input
                              id="sTI102_4X400"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X400 must be a number."
                              data-val-required="The STI102X400 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X400"
                              defaultValue={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row ">
                        <label className="font-weight col-md-2 text-14">
                          В том числе:
                        </label>
                        <label className="col-md-1 font-weight text-14">
                          За
                        </label>
                        <div className="col-md-2" />
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                4010
                              </span>
                            </div>
                            <input
                              id="sTI102_4X4010"
                              className="form-control"
                              type="number"
                              data-val="true"
                              data-val-required="The STI102X4010 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4010"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4010"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <label className="col-md-1 font-weight text-14">
                          Год
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                401
                              </span>
                            </div>
                            <input
                              id="sTI102_4X401"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X401 must be a number."
                              data-val-required="The STI102X401 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X401"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X401"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="font-weight col-md-2" />
                        <label className="font-weight col-md-1 ">За</label>
                        <div className="col-md-2" />
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                4020
                              </span>
                            </div>
                            <input
                              id="sTI102_4X4020"
                              className="form-control"
                              type="number"
                              data-val="true"
                              data-val-required="The STI102X4020 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4020"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4020"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <label className="col-md-1 font-weight text-14">
                          Год
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                402
                              </span>
                            </div>
                            <input
                              id="sTI102_4X402"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X402 must be a number."
                              data-val-required="The STI102X402 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X402"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X402"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-2 font-weight" />
                        <label className="font-weight col-md-1">За</label>
                        <div className="col-md-2" />
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                4030
                              </span>
                            </div>
                            <input
                              id="sTI102_4X4030"
                              className="form-control"
                              type="number"
                              data-val="true"
                              data-val-required="The STI102X4030 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4030"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4030"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <label className="font-weight col-md-1">Год</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                403
                              </span>
                            </div>
                            <input
                              id="sTI102_4X403"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X403 must be a number."
                              data-val-required="The STI102X403 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X403"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X403"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-1">
                          <label className="font-weight">За</label>
                        </div>
                        <div className="col-md-2" />
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                4040
                              </span>
                            </div>
                            <input
                              id="sTI102_4X4040"
                              className="form-control"
                              type="number"
                              data-val="true"
                              data-val-required="The STI102X4040 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4040"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4040"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <label className="col-md-1 font-weight">Год</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                404
                              </span>
                            </div>
                            <input
                              id="sTI102_4X404"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X404 must be a number."
                              data-val-required="The STI102X404 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X404"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X404"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-2 font-weight" />
                        <label className="col-md-1 font-weight">За</label>
                        <div className="col-md-2" />
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                4050
                              </span>
                            </div>
                            <input
                              id="sTI102X4050"
                              className="form-control"
                              type="number"
                              data-val="true"
                              data-val-required="The STI102X4050 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4050"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X4050"
                            data-valmsg-replace="true"
                          />
                        </div>
                        <label className="col-md-1 font-weight">Год</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                405
                              </span>
                            </div>
                            <input
                              id="sTI102_4X405"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X405 must be a number."
                              data-val-required="The STI102X405 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X405"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X405"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Сумма убытка, подлежащая переносу (переносится
                          величина ячейки 054 (FORM STI-102)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                406
                              </span>
                            </div>
                            <input
                              id="sTI102_4X406"
                              className="form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X406 must be a number."
                              data-val-required="The STI102X406 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X406"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X406"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Остаток неперенесенного убытка на конец налогового
                          периода (=400-406)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                407
                              </span>
                            </div>
                            <input
                              id="sTI102_4X407"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X407 must be a number."
                              data-val-required="The STI102X407 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X407"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X407"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold">
                        Раздел II. Расшифровка показателей деятельности простого
                        товарищества
                      </h5>
                      <div className="row">
                        <label className="col-md-10">
                          Совокупный годовой доход простого товарищества
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                408
                              </span>
                            </div>
                            <input
                              id="sTI102_4X408"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X408 must be a number."
                              data-val-required="The STI102X408 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X408"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X408"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Расходы простого товарищества, подлежащие вычету
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                409
                              </span>
                            </div>
                            <input
                              id="sTI102_4X409"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X409 must be a number."
                              data-val-required="The STI102X409 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X409"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X409"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль(+)/Убыток(-) до налогооблажения (=408-409)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                410
                              </span>
                            </div>
                            <input
                              id="sTI102_4X410"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X410 must be a number."
                              data-val-required="The STI102X410 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X410"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X410"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          <label className="font-weight col-md-2 text-14">
                            В том числе:
                          </label>
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль(+)/Убыток(-), оставшаяся у налогоплательщика
                          на которого возложена обязанность введения учета
                          простого товарищества в соответствии с договором «((+)
                          положительный показатель ячейки 411 переносится в
                          ячейку 167 приложения 1 (FORM STI-102-001) или (-)
                          отрицательный показатель в ячейку 210 приложения 2
                          (FORM STI-102-002));
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                411
                              </span>
                            </div>
                            <input
                              id="sTI102_4X411"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X411 must be a number."
                              data-val-required="The STI102X411 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X411"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X411"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Прибыль(+)/Убыток(-), переданная/ый другим участникам
                          простого товарищества в соответствии с договором
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                412
                              </span>
                            </div>
                            <input
                              id="sTI102_4X412"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X412 must be a number."
                              data-val-required="The STI102X412 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X412"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X412"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold">
                        Раздел III Расшифровка доходов, полученных за пределами
                        Кыргызской Республики
                      </h5>
                      <div className="row pl-3">
                        <table id="detail413Table" className="table col-md-12">
                          <thead className="bg-gray-200">
                            <tr>
                              <th scope="col" width="25%">
                                Наименование государства, где получен доход
                              </th>
                              <th scope="col" width="25%">
                                Код государства
                              </th>
                              <th scope="col" width="25%">
                                Сумма начисленного дохода
                              </th>
                              <th scope="col" width="25%">
                                Сумма удержанного/уплаченного налога
                              </th>
                              <th />
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                        <label>
                          Количество:{" "}
                          <span id="countSpan" className="font-weight-800">
                            0
                          </span>
                        </label>
                        <div className="col-md-2">
                          <button
                            id="addDetil413Btn"
                            type="button"
                            className="btn btn-primary float-right mb-4"
                          >
                            <i className="i-Add mr-2" />
                            Добавить
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Итого сумма налога</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                413
                              </span>
                            </div>
                            <input
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X413 must be a number."
                              data-val-required="The STI102X413 field is required."
                              id="Declaration_PART2_STI102_4DECLARATIONDETAIL4_STI102X413"
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X413"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL4.STI102X413"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail5">
                    <div id="app5" className="col-md-12 mt-5">
                      <h4 className="font-weight-bold">
                        Приложение 5 Совокупный годовой доход физического лица,
                        не осуществляющего предпринимательскую деятельность"
                      </h4>
                      <h5 className="font-weight-bold">
                        Раздел I. Облагаемые доходы
                      </h5>
                      <div className="row mt-5">
                        <label className="col-md-10">
                          Доходы, полученные в виде оплаты труда, включая
                          вознаграждения, гарантийные, компенсационные и другие
                          выплаты, предусмотренные трудовым законодательством
                          кыргызской республики
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                500
                              </span>
                            </div>
                            <input
                              id="sTI102_4X500"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X500 must be a number."
                              data-val-required="The STI102X500 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X500"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X500"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный в форме материальной выгоды
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                501
                              </span>
                            </div>
                            <input
                              id="sTI102_4X501"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X501 must be a number."
                              data-val-required="The STI102X501 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X501"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X501"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Стоимость безвозмездно полученного актива, включая
                          виртуальный актив
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                502
                              </span>
                            </div>
                            <input
                              id="sTI102_4X502"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X502 must be a number."
                              data-val-required="The STI102X502 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X502"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X502"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Процентный доход, доход по договору страхования
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                503
                              </span>
                            </div>
                            <input
                              id="sTI102_4X503"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X503 must be a number."
                              data-val-required="The STI102X503 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X503"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X503"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Дивиденды</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                504
                              </span>
                            </div>
                            <input
                              id="sTI102_4X504"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X504 must be a number."
                              data-val-required="The STI102X504 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X504"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X504"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Выручка от реализации движимого и недвижимого
                          имущества , за минусом стоимости его приобретения
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                505
                              </span>
                            </div>
                            <input
                              id="sTI102_4X505"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X505 must be a number."
                              data-val-required="The STI102X505 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X505"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X505"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Выручка от реализации акций, ценных бумаг, доли в
                          организации, доли партнера по договору шарика/
                          убывающая мушарака в соответствии с исламским
                          финансированием, за минусом стоимости их приобретения
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                506
                              </span>
                            </div>
                            <input
                              id="sTI102_4X506"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X506 must be a number."
                              data-val-required="The STI102X506 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X506"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X506"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Субсидии</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                507
                              </span>
                            </div>
                            <input
                              id="sTI102_4X507"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X507 must be a number."
                              data-val-required="The STI102X507 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X507"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X507"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Пенсии, стипендии, пособия, за исключением
                          выплачиваемых в соответствии с законодательством
                          кыргызской республики
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                508
                              </span>
                            </div>
                            <input
                              id="sTI102_4X508"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X508 must be a number."
                              data-val-required="The STI102X508 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X508"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X508"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Выигрыши, стоимость которых превышает 10 расчетных
                          показателей
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                509
                              </span>
                            </div>
                            <input
                              id="sTI102_4X509"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X509 must be a number."
                              data-val-required="The STI102X509 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X509"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X509"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход от прекращения обязательства налогоплательщика
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                510
                              </span>
                            </div>
                            <input
                              id="sTI102_4X510"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X510 must be a number."
                              data-val-required="The STI102X510 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X510"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X510"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Страховые суммы (возмещения) по договорам страхования
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                511
                              </span>
                            </div>
                            <input
                              id="sTI102_4X511"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X511 must be a number."
                              data-val-required="The STI102X511 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X511"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X511"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доходы в виде вознаграждений и компенсаций, полученных
                          за участие в управлении организации
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                512
                              </span>
                            </div>
                            <input
                              id="sTI102_4X512"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X512 must be a number."
                              data-val-required="The STI102X512 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X512"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X512"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Другие облагаемые доходы
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                548
                              </span>
                            </div>
                            <input
                              id="sTI102_4X548"
                              className="floatNumberField form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X548 must be a number."
                              data-val-required="The STI102X548 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X548"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X548"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Итого облагаемые доходы
                          (=500+501+502+503+504+505+506+507+508+509+510+511+512+548)
                          (показатель ячейки 549 переносится в ячейку 070 единой
                          налоговой декларации (form sti -102)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                549
                              </span>
                            </div>
                            <input
                              id="sTI102_4X549"
                              className="floatNumberField form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X549 must be a number."
                              data-val-required="The STI102X549 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X549"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X549"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <h5 className="font-weight-bold mt-3">
                        Раздел II. Необлагаемые доходы
                      </h5>
                      <div className="row mt-3">
                        <label className="col-md-10">
                          Доходы, полученные участниками вов, войны в
                          афганистане, баткенских событий, ликвидации аварии в
                          чернобыле, имеющие высшую степень отличия «Кыргыз
                          Республикасынын Эл Баатыры» и др.
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                550
                              </span>
                            </div>
                            <input
                              id="sTI102_4X550"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X550 must be a number."
                              data-val-required="The STI102X550 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X550"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X550"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доходы социально незащищенных категорий
                          налогоплательщиков
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                551
                              </span>
                            </div>
                            <input
                              id="sTI102_4X551"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X551 must be a number."
                              data-val-required="The STI102X551 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X551"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X551"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Пособия, стипендии, пенсии, установленные
                          законодательством Кыргызской Республики, а также
                          стипендии, выплачиваемые некоммерческими организациями
                          Кыргызской Республики
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                552
                              </span>
                            </div>
                            <input
                              id="sTI102_4X552"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X552 must be a number."
                              data-val-required="The STI102X552 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X552"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X552"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          ДОХОД, ПОЛУЧЕННЫЙ В ВИДЕ ВЫПЛАТЫ ИЗ ФОНДА ПРЕЗИДЕНТА
                          КЫРГЫЗСКОЙ РЕСПУБЛИКИ, РЕЗЕРВНОГО ФОНДА ТОРАГА ЖОГОРКУ
                          КЕНЕША КЫРГЫЗСКОЙ РЕСПУБЛИКИ, ФОНДА ДЕПУТАТА ЖОГОРКУ
                          КЕНЕША КЫРГЫЗСКОЙ РЕСПУБЛИКИ И РЕЗЕРВНОГО ФОНДА
                          КАБИНЕТА МИНИСТРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                553
                              </span>
                            </div>
                            <input
                              id="sTI102_4X553"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X553 must be a number."
                              data-val-required="The STI102X553 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X553"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X553"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный безвозмездно в связи с
                          обстоятельствами непреодолимой силы по решению
                          Кабинета Министров, местных кенешей, некоммерческих
                          организаций
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                554
                              </span>
                            </div>
                            <input
                              id="sTI102_4X554"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X554 must be a number."
                              data-val-required="The STI102X554 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X554"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X554"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Стипендии и единовременные денежные вознаграждения,
                          выплачиваемых чемпионам и призерам, а также занявшим
                          иные места, их тренерам и врачам, по результатам
                          участия в олимпийских, паралимпийских и азиатских
                          играх, в чемпионатах мира, азии за счет средств
                          бюджета
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                555
                              </span>
                            </div>
                            <input
                              id="sTI102_4X555"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X555 must be a number."
                              data-val-required="The STI102X555 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X555"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X555"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">Гуманитарная помощь</label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                556
                              </span>
                            </div>
                            <input
                              id="sTI102_4X556"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X556 must be a number."
                              data-val-required="The STI102X556 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X556"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X556"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный в виде выигрыша, стоимость которого
                          не превышает 10 расчетных показателей, а также
                          выигрышей от участия в стимулирующей лотереи/акции,
                          направленной на стимулирование граждан требовать
                          контрольно-кассовые чеки при проведении денежных
                          расчетов, проводимой уполномоченными государственными
                          органами
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                557
                              </span>
                            </div>
                            <input
                              id="sTI102_4X557"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X557 must be a number."
                              data-val-required="The STI102X557 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X557"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X557"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Призы, полученные на международных фестивалях,
                          конкурсах
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                558
                              </span>
                            </div>
                            <input
                              id="sTI102_4X558"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X558 must be a number."
                              data-val-required="The STI102X558 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X558"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X558"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Стоимость путевок, полученных от профсоюзных
                          организаций либо за счет средств оздоровления
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                559
                              </span>
                            </div>
                            <input
                              id="sTI102_4X559"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X559 must be a number."
                              data-val-required="The STI102X559 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X559"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X559"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доходы, полученные в рамках трудового кодекса
                          Кыргызской Республики
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                560
                              </span>
                            </div>
                            <input
                              id="sTI102_4X560"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X560 must be a number."
                              data-val-required="The STI102X560 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X560"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X560"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Алименты, любой доход супругов при разводе, а также
                          стоимость имущества, работ, услуг, полученных от
                          близких родственников в порядке наследования или
                          дарения
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                561
                              </span>
                            </div>
                            <input
                              id="sTI102_4X561"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X561 must be a number."
                              data-val-required="The STI102X561 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X561"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X561"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный от реализации движимого и/или
                          недвижимого имущества, используемого
                          налогоплательщиком для личных целей и приобретенного
                          не с целью осуществления предпринимательской
                          деятельности
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                562
                              </span>
                            </div>
                            <input
                              id="sTI102_4X562"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X562 must be a number."
                              data-val-required="The STI102X562 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X562"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X562"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Проценты, полученные по вкладам в банки кыргызской
                          республики
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                563
                              </span>
                            </div>
                            <input
                              id="sTI102_4X563"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X563 must be a number."
                              data-val-required="The STI102X563 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X563"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X563"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Проценты и доход, полученные от прироста стоимости
                          ценных бумаг, находящихся на день реализации в
                          листинге фондовых бирж по наивысшей и следующей за
                          наивысшей категориям листинга
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                564
                              </span>
                            </div>
                            <input
                              id="sTI102_4X564"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X564 must be a number."
                              data-val-required="The STI102X564 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X564"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X564"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Дивиденды, за исключением полученных от участия в
                          иностранной организации
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                565
                              </span>
                            </div>
                            <input
                              id="sTI102_4X565"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X565 must be a number."
                              data-val-required="The STI102X565 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X565"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X565"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Сумма возврата в размере внесенной доли и/или пая
                          участника, и/или от долевых ценных бумаг
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                566
                              </span>
                            </div>
                            <input
                              id="sTI102_4X566"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X566 must be a number."
                              data-val-required="The STI102X566 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X566"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X566"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Доход, полученный из средства избирательных фондов,
                          связанных с проведением избирательных кампаний,
                          кампаний референдума
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                567
                              </span>
                            </div>
                            <input
                              id="sTI102_4X567"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X567 must be a number."
                              data-val-required="The STI102X567 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X567"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X567"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Другие необлагаемые доходы
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                598
                              </span>
                            </div>
                            <input
                              id="sTI102_4X598"
                              className="floatNumberField  form-control"
                              type="number"
                              data-val="true"
                              data-val-number="The field STI102X598 must be a number."
                              data-val-required="The STI102X598 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X598"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X598"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-10">
                          Итого необлагаемые доходы
                          (=550+551+552+553+554+555+556+557+558+559+560+561+562+563+564+565+566+567+598)
                        </label>
                        <div className="form-group col-md-2">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary text-white">
                                599
                              </span>
                            </div>
                            <input
                              id="sTI102_4X599"
                              className="floatNumberField  form-control"
                              type="number"
                              readOnly=""
                              data-val="true"
                              data-val-number="The field STI102X599 must be a number."
                              data-val-required="The STI102X599 field is required."
                              name="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X599"
                              defaultValue={0}
                            />
                          </div>
                          <span
                            className="text-danger field-validation-valid"
                            data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL5.STI102X599"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail6">
                    <div id="app6" className="col-md-12 mt-5">
                      <div className="mt-4" style={{ overflowX: "auto" }}>
                        <div className="col-md-12 pl-0">
                          <h4 className="font-weight-bold">
                            Приложение 6 «Расчет суммы вычета отчислений в
                            негосударственный пенсионный фонд, социального и
                            имущественного вычета физического лица, не
                            осуществляющего предпринимательскую деятельность»
                          </h4>
                          <h5 className="font-weight-bold">
                            Раздел I. Налоговая база
                          </h5>
                          <div className="row mt-4">
                            <label className="col-md-10">
                              Облагаемые доходы (переносится показатель ячейки
                              549 приложения 5 (form sti -155-005)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    600
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X600"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X600 must be a number."
                                  data-val-required="The STI102X600 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X600"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X600"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Персональный вычет (в размере 6.5 расчетных
                              показателей за каждый месяц налогового периода)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    601
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X601"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X601 must be a number."
                                  data-val-required="The STI102X601 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X601"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X601"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Вычеты на иждивенцев налогоплательщика (в размере
                              одного расчетного показателя на каждого иждивенца
                              за каждый месяц налогового периода)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    602
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X602"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X602 must be a number."
                                  data-val-required="The STI102X602 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X602"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X602"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Отчисления по государственному социальному
                              страхованию
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    603
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X603"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X603 must be a number."
                                  data-val-required="The STI102X603 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X603"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X603"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Налоговая база (=600-601-602-603)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    604
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X604"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X604 must be a number."
                                  data-val-required="The STI102X604 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X604"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X604"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <h5 className="font-weight-bold">
                            Раздел II. Расчет суммы вычета отчислений в
                            негосударственный пенсионный фонд
                          </h5>
                          <div className="row">
                            <label className="col-md-10">
                              Ограничение в негосударственный пенсионный фонд
                              (не более 8 % от налоговой базы) (=604*8/100)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    605
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X605"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X605 must be a number."
                                  data-val-required="The STI102X605 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X605"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X605"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Фактически уплачено в негосударственный пенсионный
                              фонд
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    606
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X606"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X606 must be a number."
                                  data-val-required="The STI102X606 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X606"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X606"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Разница (=605-606)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    607
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X607"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X607 must be a number."
                                  data-val-required="The STI102X607 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X607"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X607"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              (Если значение 607 отрицательное = 605){" "}
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    608
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X608"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X608 must be a number."
                                  data-val-required="The STI102X608 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X608"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X608"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              (Если значение 607 положительное = 606){" "}
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    609
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X609"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X609 must be a number."
                                  data-val-required="The STI102X609 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X609"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X609"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <h5 className="font-weight-bold">
                            Раздел III. Расчет суммы социального вычета»;
                          </h5>
                          <div className="row">
                            <label className="col-md-10">
                              Налоговая база для социального вычета (=604-608)
                              или (=604-609){" "}
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    610
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X610"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X610 must be a number."
                                  data-val-required="The STI102X610 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X610"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X610"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Ограничение для социального вычета (не более 10 %
                              от налоговой базы) (=610*10/100) или (не более 25
                              % от налоговой базы) (=610*25/100)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    611
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X611"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X611 must be a number."
                                  data-val-required="The STI102X611 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X611"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X611"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Фактически произведенные социальные расходы
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    612
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X612"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X612 must be a number."
                                  data-val-required="The STI102X612 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X612"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X612"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Разница (=611-612)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    613
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X613"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X613 must be a number."
                                  data-val-required="The STI102X613 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X613"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X613"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              (Если значение ячейки 613 отрицательное) = 611{" "}
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    614
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X614"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X614 must be a number."
                                  data-val-required="The STI102X614 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X614"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X614"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              (Если значение ячейки 613 положительное) = 612{" "}
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    615
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X615"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X615 must be a number."
                                  data-val-required="The STI102X615 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X615"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X615"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <h5 className="font-weight-bold">
                            Раздел IV. Расчет суммы имущественного вычета
                          </h5>
                          <div className="row">
                            <label className="col-md-10">
                              Ограничение по имущественному вычету
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    616
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X616"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X616 must be a number."
                                  data-val-required="The STI102X616 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X616"
                                  defaultValue={230000.0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X616"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Сумма фактически погашенных процентов по
                              ипотечному кредиту
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    617
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X617"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X617 must be a number."
                                  data-val-required="The STI102X617 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X617"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X617"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Разница (=616-617)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    618
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X618"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X618 must be a number."
                                  data-val-required="The STI102X618 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X618"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X618"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              (если значение отрицательное, вычет = 616)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    619
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X619"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X619 must be a number."
                                  data-val-required="The STI102X619 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X619"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X619"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              (если значение положительное, вычет = 617)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    620
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X620"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X620 must be a number."
                                  data-val-required="The STI102X620 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X620"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X620"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Всего вычетов (=(608 или 609)+(614 или 615)+(619
                              или 620)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    621
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X621"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X621 must be a number."
                                  data-val-required="The STI102X621 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X621"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL6.STI102X621"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail7">
                    <div id="app7" className="col-md-12 mt-5 md-5 py-5">
                      <div className="mt-4" style={{ overflowX: "auto" }}>
                        <div className="col-md-12 pl-0">
                          <h4 className="font-weight-bold">
                            Приложение 7 «налог на имущество»
                          </h4>
                          <div className="row col-md-12">
                            <h6 className="font-weight-bold text-14">
                              Раздел I. "Налог на имущество на жилое здание,
                              сооружение и помещение"
                            </h6>
                          </div>
                          <div className="row pl-3">
                            <table
                              id="detail71Table"
                              className="table-responsive col-md-12"
                            >
                              <thead className="bg-gray-200">
                                <tr>
                                  <th scope="col" width="15%">
                                    Код имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Код района
                                  </th>
                                  <th scope="col" width="10%">
                                    Идентификационный код имущества или марка
                                    транспортного средства
                                  </th>
                                  <th scope="col" width="15%">
                                    Код категории имущества
                                  </th>
                                  <th scope="col" width="10%">
                                    Сумма налога
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата приобретения имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата отчуждения имущества
                                  </th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                            <label>
                              Количество:{" "}
                              <span
                                id="sDETAIL71CountSpan"
                                className="font-weight-800"
                              >
                                0
                              </span>
                            </label>
                            <div className="col-md-2">
                              <button
                                id="addDetail71Btn"
                                type="button"
                                className="btn btn-primary float-right mb-4"
                              >
                                <i className="i-Add mr-2" />
                                Добавить
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО НА ЖИЛОЕ ЗДАНИЕ,
                              СООРУЖЕНИЕ И ПОМЕЩЕНИЕ
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    715
                                  </span>
                                </div>
                                <input
                                  className="total775 form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X715 must be a number."
                                  data-val-required="The STI102X715 field is required."
                                  id="Declaration_PART2_STI102X715"
                                  name="Declaration.PART2.STI102X715"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102X715"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row col-md-12">
                            <h6 className="font-weight-bold text-14">
                              Раздел II. "Налог на имущество на нежилое здание,
                              сооружение и помещение"
                            </h6>
                          </div>
                          <div className="row pl-3">
                            <table
                              id="detail72Table"
                              className="table-responsive col-md-12"
                            >
                              <thead className="bg-gray-200">
                                <tr>
                                  <th scope="col" width="15%">
                                    Код имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Код района
                                  </th>
                                  <th scope="col" width="15%">
                                    Идентификационный код имущества или марка
                                    транспортного средства
                                  </th>
                                  <th scope="col" width="15%">
                                    Код категории имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Сумма налога
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата приобретения имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата отчуждения имущества
                                  </th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                            <label>
                              Количество:{" "}
                              <span
                                id="sDETAIL72CountSpan"
                                className="font-weight-800"
                              >
                                0
                              </span>
                            </label>
                            <div className="col-md-2">
                              <button
                                id="addDetail72Btn"
                                type="button"
                                className="btn btn-primary float-right mb-4"
                              >
                                <i className="i-Add mr-2" />
                                Добавить
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО НА НЕЖИЛОЕ ЗДАНИЕ,
                              СООРУЖЕНИЕ И ПОМЕЩЕНИЕ
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    725
                                  </span>
                                </div>
                                <input
                                  className="total775 form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X725 must be a number."
                                  data-val-required="The STI102X725 field is required."
                                  id="Declaration_PART2_STI102X725"
                                  name="Declaration.PART2.STI102X725"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row col-md-12">
                            <h6 className="font-weight-bold text-14">
                              Раздел III. Налог на имущество на земельный
                              участок, относящийся к сельскохозяйственным
                              угодьям
                            </h6>
                          </div>
                          <div className="row pl-3">
                            <table
                              id="detail73Table"
                              className="table-responsive col-md-12"
                            >
                              <thead className="bg-gray-200">
                                <tr>
                                  <th scope="col" width="15%">
                                    Код имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Код района
                                  </th>
                                  <th scope="col" width="15%">
                                    Идентификационный код имущества или марка
                                    транспортного средства
                                  </th>
                                  <th scope="col" width="15%">
                                    Код категории имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Сумма налога
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата приобретения имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата отчуждения имущества
                                  </th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                            <label>
                              Количество:{" "}
                              <span
                                id="sDETAIL73CountSpan"
                                className="font-weight-800"
                              >
                                0
                              </span>
                            </label>
                            <div className="col-md-2">
                              <button
                                id="addDetail73Btn"
                                type="button"
                                className="btn btn-primary float-right mb-4"
                              >
                                <i className="i-Add mr-2" />
                                Добавить
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО НА ЗЕМЕЛЬНЫЙ УЧАСТОК,
                              ОТНОСЯЩИЙСЯ К СЕЛЬСКОХОЗЯЙСТВЕННЫМ УГОДЬЯМ
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    735
                                  </span>
                                </div>
                                <input
                                  className="total775 form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X735 must be a number."
                                  data-val-required="The STI102X735 field is required."
                                  id="Declaration_PART2_STI102X735"
                                  name="Declaration.PART2.STI102X735"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row col-md-12">
                            <h6 className="font-weight-bold text-14">
                              Раздел IV. Налог на имущество на земли населенных
                              пунктов и земли несельскохозяйственного назначения
                            </h6>
                          </div>
                          <div className="row pl-3">
                            <table
                              id="detail74Table"
                              className="table-responsive col-md-12"
                            >
                              <thead className="bg-gray-200">
                                <tr>
                                  <th scope="col" width="15%">
                                    Код имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Код района
                                  </th>
                                  <th scope="col" width="15%">
                                    Идентификационный код имущества или марка
                                    транспортного средства
                                  </th>
                                  <th scope="col" width="15%">
                                    Код категории имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Сумма налога
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата приобретения имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата отчуждения имущества
                                  </th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                            <label>
                              Количество:{" "}
                              <span
                                id="sDETAIL74CountSpan"
                                className="font-weight-800"
                              >
                                0
                              </span>
                            </label>
                            <div className="col-md-2">
                              <button
                                id="addDetail74Btn"
                                type="button"
                                className="btn btn-primary float-right mb-4"
                              >
                                <i className="i-Add mr-2" />
                                Добавить
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО НА ЗЕМЛИ НАСЕЛЕННЫХ
                              ПУНКТОВ И ЗЕМЛИ НЕСЕЛЬСКОХОЗЯЙСТВЕННОГО НАЗНАЧЕНИЯ
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    745
                                  </span>
                                </div>
                                <input
                                  className="total775 form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X745 must be a number."
                                  data-val-required="The STI102X745 field is required."
                                  id="Declaration_PART2_STI102X745"
                                  name="Declaration.PART2.STI102X745"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row col-md-12">
                            <h6 className="font-weight-bold text-14">
                              Раздел V. Налог на транспортное средство
                            </h6>
                          </div>
                          <div className="row pl-3">
                            <table
                              id="detail75Table"
                              className="table-responsive col-md-12"
                            >
                              <thead className="bg-gray-200">
                                <tr>
                                  <th scope="col" width="15%">
                                    Код имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Код района
                                  </th>
                                  <th scope="col" width="15%">
                                    Идентификационный код имущества или марка
                                    транспортного средства
                                  </th>
                                  <th scope="col" width="15%">
                                    Код категории имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Сумма налога
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата приобретения имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата отчуждения имущества
                                  </th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                            <label>
                              Количество:{" "}
                              <span
                                id="sDETAIL75CountSpan"
                                className="font-weight-800"
                              >
                                0
                              </span>
                            </label>
                            <div className="col-md-2">
                              <button
                                id="addDetail75Btn"
                                type="button"
                                className="btn btn-primary float-right mb-4"
                              >
                                <i className="i-Add mr-2" />
                                Добавить
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО НА ТРАНСПОРТНОЕ СРЕДСТВО
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    755
                                  </span>
                                </div>
                                <input
                                  className="total775 form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X755 must be a number."
                                  data-val-required="The STI102X755 field is required."
                                  id="Declaration_PART2_STI102X755"
                                  name="Declaration.PART2.STI102X755"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row col-md-12">
                            <h6 className="font-weight-bold text-14">
                              Раздел VI. Налог на имущество на придомовой,
                              приусадебный и садово-огородный земельный участок
                            </h6>
                          </div>
                          <div className="row pl-3">
                            <table
                              id="detail76Table"
                              className="table-responsive col-md-12"
                            >
                              <thead className="bg-gray-200">
                                <tr>
                                  <th scope="col" width="15%">
                                    Код имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Код района
                                  </th>
                                  <th scope="col" width="15%">
                                    Идентификационный код имущества или марка
                                    транспортного средства
                                  </th>
                                  <th scope="col" width="15%">
                                    Код категории имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Сумма налога
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата приобретения имущества
                                  </th>
                                  <th scope="col" width="15%">
                                    Дата отчуждения имущества
                                  </th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                            <label>
                              Количество:{" "}
                              <span
                                id="sDETAIL76CountSpan"
                                className="font-weight-800"
                              >
                                0
                              </span>
                            </label>
                            <div className="col-md-2">
                              <button
                                id="addDetail76Btn"
                                type="button"
                                className="btn btn-primary float-right mb-4"
                              >
                                <i className="i-Add mr-2" />
                                Добавить
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО НА ПРИДОМОВОЙ,
                              ПРИУСАДЕБНЫЙ И САДОВО-ОГОРОДНЫЙ ЗЕМЕЛЬНЫЙ УЧАСТОК
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    765
                                  </span>
                                </div>
                                <input
                                  className="total775 form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X765 must be a number."
                                  data-val-required="The STI102X765 field is required."
                                  id="Declaration_PART2_STI102X765"
                                  name="Declaration.PART2.STI102X765"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              ИТОГО НАЛОГ НА ИМУЩЕСТВО
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    775
                                  </span>
                                </div>
                                <input
                                  className="form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X775 must be a number."
                                  data-val-required="The STI102X775 field is required."
                                  id="Declaration_PART2_STI102X775"
                                  name="Declaration.PART2.STI102X775"
                                  defaultValue={0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="_STI102_4DeclarationDetail8">
                    <div id="app6" className="col-md-12 mt-5">
                      <div className="mt-4" style={{ overflowX: "auto" }}>
                        <div className="col-md-12 pl-0">
                          <h4 className="font-weight-bold">
                            Приложение 8 «Движение активов»
                          </h4>
                          <h5 className="font-weight-bold">
                            Раздел I. Доходы и активы, связанные с
                            предпринимательской деятельностью
                          </h5>
                          <div className="row mt-4">
                            <label className="col-md-10">
                              Прибыль индивидуального предпринимателя после
                              налогообложения (переносится показатель ячейки 065
                              декларации (form sti-102)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    750
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X750"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X750 must be a number."
                                  data-val-required="The STI102X750 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X750"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X750"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Необлагаемые доходы (переносится сумма показателей
                              ячеек 199 приложения 1 (form sti-102-001) и 230
                              приложения 2 ( form sti-102-002 )
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    751
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X751"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X751 must be a number."
                                  data-val-required="The STI102X751 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X751"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X751"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Доходы после налогообложения по специальным
                              налоговым режимам
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    752
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X752"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X752 must be a number."
                                  data-val-required="The STI102X752 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X752"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X752"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Поступление активов от предпринимательской
                              деятельности
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    753
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X753"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X753 must be a number."
                                  data-val-required="The STI102X753 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X753"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X753"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">Другие доходы</label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    758
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X758"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X758 must be a number."
                                  data-val-required="The STI102X758 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X758"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X758"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Итого доходы и активы (= 750+751+752+753+758)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    759
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X759"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X759 must be a number."
                                  data-val-required="The STI102X759 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X759"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X759"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <h5 className="font-weight-bold">
                            Раздел II. Доходы и активы, не связанные с
                            предпринимательской деятельностью
                          </h5>
                          <div className="row">
                            <label className="col-md-10">
                              Доход физического лица после обложения подоходным
                              налогом, отчислениями по государственному
                              социальному страхованию и/или в негосударственный
                              пенсионный фонд (переносится показатель ячейки 085
                              единой налоговой декларации (form sti-102)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    760
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X760"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X760 must be a number."
                                  data-val-required="The STI102X760 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X760"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X760"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Необлагаемые доходы (переносится показатель ячейки
                              599 приложения 5 (form sti-102-005)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    761
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X761"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X761 must be a number."
                                  data-val-required="The STI102X761 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X761"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X761"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Доход от индивидуальной трудовой деятельности
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    762
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X762"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X762 must be a number."
                                  data-val-required="The STI102X762 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X762"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X762"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Суммы кредитов, займов, ссуд, полученные
                              физическим лицом
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    763
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X763"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X763 must be a number."
                                  data-val-required="The STI102X763 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X763"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X763"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Суммы кредитов, займов, ссуд, возвращенные
                              физическому лицу
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    764
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X764"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X764 must be a number."
                                  data-val-required="The STI102X764 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X764"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X764"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Другие доходы и активы, полученные физическим
                              лицом
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    768
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X768"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X768 must be a number."
                                  data-val-required="The STI102X768 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X768"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X768"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Итого доходов и активов, полученных физическим
                              лицом (=760+761+762+763+764+768)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    769
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X769"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X769 must be a number."
                                  data-val-required="The STI102X769 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X769"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X769"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <h5 className="font-weight-bold">
                            Раздел III. Расходы, не связанные с
                            предпринимательской деятельностью
                          </h5>
                          <div className="row">
                            <label className="col-md-10">
                              Cтоимость приобретенного имущества и инвестиции в
                              приобретение (= 771+772+773+774+775+776+790)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    770
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X770"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X770 must be a number."
                                  data-val-required="The STI102X770 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X770"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X770"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">Дом</label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    771
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X771"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X771 must be a number."
                                  data-val-required="The STI102X771 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X771"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X771"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">Квартира</label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    772
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X772"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X772 must be a number."
                                  data-val-required="The STI102X772 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X772"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X772"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Земельный участок
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    773
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X773"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X773 must be a number."
                                  data-val-required="The STI102X773 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X773"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X773"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Транспортные средства
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    774
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X774"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X774 must be a number."
                                  data-val-required="The STI102X774 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X774"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X774"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">Ценные бумаги</label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    775
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X775"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X775 must be a number."
                                  data-val-required="The STI102X775 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X775"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X774"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Домашние животные
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    776
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X776"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X776 must be a number."
                                  data-val-required="The STI102X776 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X776"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X776"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Другие виды недвижимого и движимого имущества
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    790
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X790"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X790 must be a number."
                                  data-val-required="The STI102X790 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X790"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X790"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Суммы кредитов, займов, ссуд, возвращенные
                              физическим лицом
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    791
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X791"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X791 must be a number."
                                  data-val-required="The STI102X791 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X791"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X791"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Суммы кредитов, займов, ссуд, выданные физическим
                              лицом
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    792
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X792"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X792 must be a number."
                                  data-val-required="The STI102X792 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X792"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X792"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Другие расходы и выбывшие активы
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    798
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X798"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  data-val="true"
                                  data-val-number="The field STI102X798 must be a number."
                                  data-val-required="The STI102X798 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X798"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X798"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-10">
                              Итого расходов и выбывших активов физического
                              лица: (=770+791+792+798)
                            </label>
                            <div className="form-group col-md-2">
                              <div className="input-group ">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    799
                                  </span>
                                </div>
                                <input
                                  id="sTI102_4X799"
                                  className="floatNumberField  form-control"
                                  type="number"
                                  readOnly=""
                                  data-val="true"
                                  data-val-number="The field STI102X799 must be a number."
                                  data-val-required="The STI102X799 field is required."
                                  name="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X799"
                                  defaultValue={0}
                                />
                              </div>
                              <span
                                className="text-danger field-validation-valid"
                                data-valmsg-for="Declaration.PART2.STI102_4DECLARATIONDETAIL8.STI102X799"
                                data-valmsg-replace="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2 md-2">
            <div className="col-md-2">
              <button
                id="SubmitButton"
                className="btn btn-primary btn-block"
                onclick="SetModelValue()"
                type="submit"
              >
                <i className="i-Disk mr-1" />
                Отправить в ГНС
              </button>
            </div>
            <div className="col-md-2">
              <a
                className="btn btn-secondary btn-block"
                href="/report/declaration"
              >
                Назад
              </a>
            </div>
            <div className="col-md-2">
              <a
                id="printReportPreview"
                className="btn btn-secondary btn-block"
              >
                Предпросмотр
              </a>
            </div>
          </div>
          <input
            name="__RequestVerificationToken"
            type="hidden"
            defaultValue="CfDJ8Pzizjxy2jdGv7RFBJZ43SKGgJQmDHIKu-5nQIEx3nbCv6DJl6LlrEEtNA84GR581vsX8UNmhoMp93OgBee_uvyPQmqDbINnsoTGr8gjcVW7F8VuzYvB31IHKWJVq7WB2CTkxO6LksxLLxshiHEF9tiZvrhfnRz9hMGam_ww0lUI6ptorFwNh0uTlbFqjnuxyQ"
          />
          <input
            name="Declaration.PART2.STI101X1"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X2"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X3"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X4"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X4_2"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X5"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X6"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7_1"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7_2"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7_3"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7_4"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7_5"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X7_6"
            type="hidden"
            defaultValue="false"
          />
          <input
            name="Declaration.PART2.STI101X8"
            type="hidden"
            defaultValue="false"
          />
        </form>
      </div>
    </div>
  </div>
  <div className="plan-pdf" id="plan-pdf">
    <div className="plan-pdf__top" />
    <div className="plan-pdf__body">
      <embed id="pdfDocument" style={{ width: "100%", height: "90%" }} />
    </div>
  </div>
  <div id="loading-overlay">
    <img id="loading-gif" src="/images/spinner.svg" />
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .input-validation-error {\n        border: 1px solid red;\n    }\n"
    }}
  />
  <link
    rel="stylesheet"
    href="/_content/AspNetCoreHero.ToastNotification/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="/_content/AspNetCoreHero.ToastNotification/notyf.min.css"
  />
</>

            </MDBox>
            {/* <Footer /> */}
        </DashboardLayout>
    );
}

export default Form;



