import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  .timeline {
    &-item {
      font-size: ${props => props.theme.fontSize.desktop.badge};
      line-height: 1.75em;
      border-top: 3px solid ${props => props.theme.colors.primary};
      border-image: ${props => props.theme.colors.primary};
      border-image-slice: 1;
      border-width: 3px;
      margin: 0;
      padding: 40px;
      counter-increment: section;
      position: relative;
      text-align: justify;
      span {
        display: block;
        margin-bottom: 10px;
      }
    }
    //odd number borders
    &-item:nth-child(odd) {
      border-right: 3px solid ${props => props.theme.colors.primary};
      padding-left: 0;
      &:before {
        left: 100%;
        margin-left: -20px;
      }
    }
    //even number borders
    &-item:nth-child(even) {
      border-left: 3px solid ${props => props.theme.colors.primary};
      padding-right: 0;
      span {
        text-align: end;
      }
      &:before {
        right: 100%;
        margin-right: -20px;
      }
    }
    //handle first and last
    &-item:first-child {
      border-top: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    &-item:last-child {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  @media (max-width: 768px) {
    width: 80vw;
    .timeline {
      .timeline-item {
        font-size: ${props => props.theme.fontSize.mobile.badge};
      }
    }
  }
`;

export const Timeline: React.FC = () => {
  return (
    <Wrapper>
      <div className="timeline">
        <p className="timeline-item">
          <span>
            <b>Lise</b> 2015-2019
          </span>
          Lise eğitimimi İzmit Muallim Naci Anadolu Lisesinde gördüm. Bölüm olarak ise yapancı dil (ingilizce/almanca)
          okudum. 2019 yılında mezun oldum.
        </p>
        <p className="timeline-item">
          <span>
            <b>Üniversite</b> 2019-2021
          </span>
          Üniversiteyi Akdeniz Üniversitesi Bilgisayar Programcılığı Bölümünde okudum. Bu dönemde kendimi{" "}
          <b>web developer</b> olarak geliştirmeye çalıştım. Front-End alanında ilk temellerimi{" "}
          <b>(HTML-Pug/CSS-SASS-LESS/JS-TS)</b> attıktan sonra <b>VueJS</b> kütüphanesiyle ve ardından sırasıyla{" "}
          <b>ReactJS</b>, <b>Angular</b> kütüphanelerini kullanarak projeler geliştirdim. Back-end kısmında ise
          ağırlıklı olarak <b>NodeJS</b> üzerinde geliştirmeler yaptım. NodeJS kullanırken de <b>NestJS</b> ve{" "}
          <b>ExpressJS</b> kütüphanelerinden yararlandım. Veritabanı olarak <b>PostgreSQL</b>, <b>MySQL</b>,{" "}
          <b>MongoDB</b> ve <b>Redis</b> kullanmayı amaçladım. ORM/ODM olarak <b>Sequelize</b>, <b>typeorm</b> ve{" "}
          <b>mongoose</b> kullanmayı öğrendim. <b>GoLang</b>'e merak salıp, öğrendim. <b>Gin</b> ve <b>gofiber</b>{" "}
          kütüphanelerini kullanarak back-end yazılımlar geliştirdim.
        </p>
        <p className="timeline-item">
          <span>
            <b>Şu an</b> 2021-?
          </span>
          Şu an ise kendimi öğrendiğim konularda geliştirmeyi hedefledim. Yazdığım kodları daha verimli hale getirmeye
          çalışıyorum. İş arıyor ve tecrübe kazanmak istiyorum.
        </p>
      </div>
    </Wrapper>
  );
};
