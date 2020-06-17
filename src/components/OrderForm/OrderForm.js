import React, { Component } from 'react';
import styles from './OrderForm.module.css';
import Modal from 'react-awesome-modal';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className={styles.container} id="order">
        <form className={styles.form}>
          <ul>
            <li>
              <label htmlFor="fname">Ваше имя</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Введите имя"
                required
              />
            </li>
            <li>
              <label htmlFor="phone">Телефон</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Введите телефон"
                required
              />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="adr"
                name="email"
                placeholder="Введите почту"
                required
              ></input>
            </li>
          </ul>
          <button
            className={styles.submit}
            type="submit"
            onClick={() => this.openModal()}
          >
            Заказать
          </button>
          <Modal
            className={styles.modal}
            visible={this.state.visible}
            width="600"
            height="400"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <img
                alt="modal"
                src={require('../../img/modal.png')}
                className={styles.imgModal}
              />
              <h1 className={styles.titleModal}>Спасибо за заявку</h1>
              <p>Наш менеджер свяжется с вами</p>
              <a href="https://www.facebook.com/">
                <img
                  alt="facebook"
                  className={styles.icon}
                  src={require('../../img/facebook.png')}
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  alt="insta"
                  className={styles.icon}
                  src={require('../../img/insta.png')}
                />
              </a>
            </div>
          </Modal>
        </form>
      </div>
    );
  }
}

export default OrderForm;
