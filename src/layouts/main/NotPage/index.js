import React from 'react';
import BasicLayout from "../components/BasicLayout";

import { Link } from 'react-router-dom'


function Basic(props) {
    return (
        <BasicLayout>
            <section className="vs-error-wrapper space">
                <div className="container"><div className="error-content text-center">
                    <h2 className="error-number">4<span className="text-theme">0</span>4</h2>
                    <h3 className="error-title">Упс, страница не найдена</h3>
                    <p className="error-text">Сожалеем, но мы не можем найти запрошенную вами страницу. Возможно, это связано с тем, что вы неправильно ввели веб-адрес.</p>
                    <Link to="/" className="vs-btn"><i className="fas fa-home ms-0 me-2" />На главную страницу</Link>
                </div>
                </div>
            </section>
        </BasicLayout>
    );
};

export default Basic;