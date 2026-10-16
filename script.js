// Переключатели в настройках
document.querySelectorAll('[data-switch]').forEach(function(sw) {
    sw.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

const cityData = {
    paris: {
        name: "Париж",
        country: "Франция",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        description: "Париж — столица Франции и один из самых романтичных городов мира.",
        history: "Основанный более 2000 лет назад, Париж прошёл путь от небольшого поселения до мировой столицы искусства.",
        attractions: [
            "Эйфелева башня",
            "Лувр",
            "Нотр-Дам де Пари",
            "Елисейские поля",
            "Монмартр"
        ],
        features: ["7 дней", "Отель 4", "Завтрак включён", "Гид"],
        price: "2 900 руб"
    },
    tokyo: {
        name: "Токио",
        country: "Япония",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
        description: "Токио — столица Японии, где древние храмы соседствуют с неоновыми улицами.",
        history: "До 1868 года город назывался Эдо. После реставрации Мэйдзи стал столицей.",
        attractions: [
            "Токийская башня",
            "Храм Сэнсо-дзи",
            "Сибуя",
            "Гора Фудзи",
            "Императорский дворец"
        ],
        features: ["10 дней", "Отель 5", "Трансфер", "Гид"],
        price: "1 500 руб"
    },
    rome: {
        name: "Рим",
        country: "Италия",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
        description: "Рим — столица Италии и один из древнейших городов мира.",
        history: "Согласно легенде, Рим основан в 753 году до н.э. братьями Ромулом и Ремом.",
        attractions: [
            "Колизей",
            "Фонтан Треви",
            "Ватикан",
            "Пантеон",
            "Испанская лестница"
        ],
        features: ["5 дней", "Отель 4", "Экскурсии", "Завтрак"],
        price: "3 700 руб"
    },
    dubai: {
        name: "Дубай",
        country: "ОАЭ",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        description: "Дубай — крупнейший город ОАЭ и один из самых футуристичных мегаполисов мира.",
        history: "Ещё в середине XX века Дубай был небольшим торговым портом. Благодаря нефти превратился в мировой центр туризма.",
        attractions: [
            "Бурдж-Халифа",
            "Дубай Молл",
            "Пальма Джумейра",
            "Аквариум Дубая",
            "Пустынное сафари"
        ],
        features: ["7 дней", "Отель 5", "Всё включено", "Пляж"],
        price: "3 300 руб"
    }
};

function openCityModal(cityKey) {
    const city = cityData[cityKey];
    if (!city) return;

    const modal = document.getElementById('cityModal');
    if (!modal) return;

    let html = '<div class="modal-window">';
    html += '<div class="modal-close" data-close>×</div>';
    html += '<img class="modal-image" src="' + city.image + '" alt="' + city.name + '">';
    html += '<div class="modal-body">';
    html += '<h2>' + city.name + '</h2>';
    html += '<p class="modal-country">' + city.country + '</p>';
    html += '<p>' + city.description + '</p>';

    html += '<h3>История</h3>';
    html += '<p>' + city.history + '</p>';

    html += '<h3>Что посмотреть</h3>';
    html += '<ul>';
    city.attractions.forEach(function(a) {
        html += '<li>' + a + '</li>';
    });
    html += '</ul>';

    html += '<h3>Что включено в тур</h3>';
    html += '<div class="modal-features">';
    city.features.forEach(function(f) {
        html += '<span>' + f + '</span>';
    });
    html += '</div>';

    html += '<div class="modal-price">';
    html += '<span class="price-value">' + city.price + ' <small>/ чел.</small></span>';
    html += '<button class="book-btn" data-book>Забронировать</button>';
    html += '</div>';

    html += '</div>';
    html += '</div>';

    modal.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCityModal() {
    const modal = document.getElementById('cityModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Делегирование событий — работает всегда
const modalEl = document.getElementById('cityModal');
if (modalEl) {
    modalEl.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-close')) {
            closeCityModal();
            return;
        }
        if (e.target.hasAttribute('data-book')) {
            alert('Заявка отправлена!');
            return;
        }
        if (e.target === modalEl) {
            closeCityModal();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCityModal();
    }
});