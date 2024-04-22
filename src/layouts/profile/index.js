import React, { useState, useEffect } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import { List, ListItem, ListItemText, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
import CircularProgress from '@mui/material/CircularProgress';
import dataa from "../../data.json"

const ArticleListPage = () => {
    const data = dataa

    const [tdata, setTdata] = useState([]);
    const [sections, setSections] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');

    useEffect(() => {
        setTdata(data)

        // Разделы
        const sectionsData = data.map(section => ({ id: section.id, title: section.title }));
        setSections(sectionsData);

        // Главы
        const chaptersData = data.flatMap(section => section.chapters.map(chapter => ({ id: chapter.id, title: chapter.title })));
        setChapters(chaptersData);

        // Статьи
        const articlesData = data.flatMap(section => section.chapters.flatMap(chapter =>
            chapter.articles.map(article => ({ id: article.id, title: article.title, content: article.content, section: section.title, chapter: chapter.title }))
        ));
        setArticles(articlesData);
        setFilteredArticles(articlesData);
        setLoading(false);
    }, []);



    // Функция для фильтрации статей по поисковому запросу
    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(term)
        );
        setFilteredArticles(filtered);
    };

    // Функции для фильтрации статей по разделу и главе
    const handleSectionFilter = (event) => {
        const section = event.target.value;
        console.log(section)
        setSelectedSection(section);
        const filteredData = section ? data.filter(item => item.id === section) : data;
        setTdata(filteredData)
        setChapters(filteredData[0].chapters)
    };

    const handleChapterFilter = (event) => {
        const chapter = event.target.value;
        const filteredSection = data.filter(item => item.id === selectedSection)
        setSelectedChapter(chapter);
        const filteredData = chapter
            ?

            [...filteredSection].map(section => ({
                ...section,
                chapters: section.chapters.filter(item => item.id === chapter)
            }))
            : filteredSection;
        setTdata(filteredData)
    };

    const parseHTML = (htmlString) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = htmlString;
        return Array.from(wrapper.childNodes).map(child => child.outerHTML);
    };



    return (
        <DashboardLayout>
            <Card>
                <MDBox px={3}>
                    <MDBox
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center">
                        <MDBox 
                        width="50%"
                        me={2}
                        display="flex"
                            flexDirection={{ xs: "column", lg: "row" }}
                            justifyContent="space-between"
                            alignItems="center">
                            <FormControl style={{width:'49%'}}  margin="normal" >
                                <InputLabel>Выберите раздел</InputLabel>
                                <Select value={selectedSection} onChange={handleSectionFilter}>
                                    <MenuItem value="">Все разделы</MenuItem>
                                    {sections.map(section => (
                                        <MenuItem key={section.id} value={section.id}>{section.title}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl style={{width:'49%'}} margin="normal">
                                <InputLabel>Выберите главу</InputLabel>
                                <Select disabled={!selectedSection} value={selectedChapter} onChange={handleChapterFilter}>
                                    <MenuItem value="">Все главы</MenuItem>
                                    {chapters.map(chapter => (
                                        <MenuItem key={chapter.id} value={chapter.id}>{chapter.title}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </MDBox>
                        <MDBox>
                        <TextField
                            label="Поиск статьи"
                            // value={searchTerm}
                            // onChange={handleSearch}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        </MDBox>
                    </MDBox>
                    <hr/>
                    
                    {loading ? (
                        <MDBox display="flex" justifyContent="center">
                            <CircularProgress />
                        </MDBox>
                    ) : (
                        tdata.map((section, sectionIndex) => (
                            <MDBox key={sectionIndex}>
                                <MDTypography variant="h3" >{section.title}</MDTypography>
                                {section.chapters.map((chapter, chapterIndex) => (
                                    <MDBox key={chapterIndex}>
                                        <MDTypography variant="h4" color='info'>{chapter.title}</MDTypography>
                                        {chapter.articles.map((article, articleIndex) => (
                                            <MDBox key={articleIndex}>
                                                <MDTypography variant="h5" color="warning">{article.title}</MDTypography>
                                                {parseHTML(article.content).map((child, index) => (
                                                    <div key={index} dangerouslySetInnerHTML={{ __html: child }} />
                                                ))}
                                            </MDBox>
                                        ))}
                                    </MDBox>
                                ))}
                            </MDBox>
                        ))
                    )}
                </MDBox>
            </Card>
        </DashboardLayout>
    );
};

export default ArticleListPage;
