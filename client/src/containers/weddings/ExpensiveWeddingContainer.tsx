import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_WEDDING } from '../../libs/graphql/weddings';
import { toast } from 'react-toastify';
import ExpensiveWedding from '../../components/weddings/expensive';
import ExpenseButton from '../../components/weddings/expensive/ExpenseButton';
import ExpensiveTemplate from '../../components/weddings/expensive/ExpensiveTemplate';
import Convention from '../../components/weddings/expensive/Convention';
import Company from '../../components/weddings/expensive/Company';
import Hanbok from '../../components/weddings/expensive/Hanbok';
import Event from '../../components/weddings/expensive/Event';
import Meal from '../../components/weddings/expensive/Meal';
import Present from '../../components/weddings/expensive/Present';
import Reserve from '../../components/weddings/expensive/Reserve';

function ExpensiveWeddingContainer() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    husband_name: '',
    bride_name: '',
    event_at: '',
    company_husband: '',
    company_bride: '',
    rooftop_husband: '',
    rooftop_bride: '',
    owner_woman_husband: '',
    owner_woman_bride: '',
    owner_man_husband: '',
    owner_man_bride: '',
    select_husband: '',
    select_bride: '',
    frame_husband: '',
    frame_bride: '',
    dress_husband: '',
    dress_bride: '',
    hairpin_husband: '',
    hairpin_bride: '',
    wig_husband: '',
    wig_bride: '',
    video_husband: '',
    video_bride: '',
    etc_husband: '',
    etc_bride: '',
    rental_husband: '',
    rental_bride: '',
    sword_husband: '',
    sword_bride: '',
    glove_husband: '',
    glove_bride: '',
    bouquet_husband: '',
    bouquet_bride: '',
    ceremony_husband: '',
    ceremony_bride: '',
    play_husband: '',
    play_bride: '',
    anthem_husband: '',
    anthem_bride: '',
    moderator_husband: '',
    moderator_bride: '',
    officiate_husband: '',
    officiate_bride: '',
    hanbok_pre_husband: '',
    hanbok_pre_bride: '',
    hanbok_post_husband: '',
    hanbok_post_bride: '',
    meals: 'privacy',
    meals_price: '',
    meals_num_husband: '',
    meals_num_bride: '',
    present: 'privacy',
    present_price: '',
    present_num_husband: '',
    present_num_bride: '',
    reserve: 'half',
    reserve_pay: '',
  });
  const {
    husband_name,
    bride_name,
    event_at,
    company_husband,
    company_bride,
    rooftop_husband,
    rooftop_bride,
    owner_woman_husband,
    owner_woman_bride,
    owner_man_husband,
    owner_man_bride,
    select_husband,
    select_bride,
    frame_husband,
    frame_bride,
    dress_husband,
    dress_bride,
    hairpin_husband,
    hairpin_bride,
    wig_husband,
    wig_bride,
    video_husband,
    video_bride,
    etc_husband,
    etc_bride,
    rental_husband,
    rental_bride,
    sword_husband,
    sword_bride,
    glove_husband,
    glove_bride,
    bouquet_husband,
    bouquet_bride,
    ceremony_husband,
    ceremony_bride,
    play_husband,
    play_bride,
    anthem_husband,
    anthem_bride,
    moderator_husband,
    moderator_bride,
    officiate_husband,
    officiate_bride,
    hanbok_pre_husband,
    hanbok_pre_bride,
    hanbok_post_husband,
    hanbok_post_bride,
    meals,
    meals_price,
    meals_num_husband,
    meals_num_bride,
    present,
    present_price,
    present_num_husband,
    present_num_bride,
    reserve,
    reserve_pay,
  } = inputs;
  const [startDate, setStartDate] = useState(new Date());
  const [AddWedding, { client }] = useMutation(ADD_WEDDING);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onBack = () => {
    history.goBack();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      [
        husband_name,
        bride_name,
        event_at,
        company_husband,
        company_bride,
        rooftop_husband,
        rooftop_bride,
        owner_woman_husband,
        owner_woman_bride,
        owner_man_husband,
        owner_man_bride,
        select_husband,
        select_bride,
        frame_husband,
        frame_bride,
        dress_husband,
        dress_bride,
        hairpin_husband,
        hairpin_bride,
        wig_husband,
        wig_bride,
        video_husband,
        video_bride,
        etc_husband,
        etc_bride,
        rental_husband,
        rental_bride,
        sword_husband,
        sword_bride,
        glove_husband,
        glove_bride,
        bouquet_husband,
        bouquet_bride,
        ceremony_husband,
        ceremony_bride,
        play_husband,
        play_bride,
        anthem_husband,
        anthem_bride,
        moderator_husband,
        moderator_bride,
        officiate_husband,
        officiate_bride,
        hanbok_pre_husband,
        hanbok_pre_bride,
        hanbok_post_husband,
        hanbok_post_bride,
        meals,
        meals_price,
        meals_num_husband,
        meals_num_bride,
        present,
        present_price,
        present_num_husband,
        present_num_bride,
        reserve,
        reserve_pay,
      ].includes('')
    ) {
      console.log(
        husband_name,
        bride_name,
        event_at,
        company_husband,
        company_bride,
        rooftop_husband,
        rooftop_bride,
        owner_woman_husband,
        owner_woman_bride,
        owner_man_husband,
        owner_man_bride,
        select_husband,
        select_bride,
        frame_husband,
        frame_bride,
        dress_husband,
        dress_bride,
        hairpin_husband,
        hairpin_bride,
        wig_husband,
        wig_bride,
        video_husband,
        video_bride,
        etc_husband,
        etc_bride,
        rental_husband,
        rental_bride,
        sword_husband,
        sword_bride,
        glove_husband,
        glove_bride,
        bouquet_husband,
        bouquet_bride,
        ceremony_husband,
        ceremony_bride,
        play_husband,
        play_bride,
        anthem_husband,
        anthem_bride,
        moderator_husband,
        moderator_bride,
        officiate_husband,
        officiate_bride,
        hanbok_pre_husband,
        hanbok_pre_bride,
        hanbok_post_husband,
        hanbok_post_bride,
        meals,
        meals_price,
        meals_num_husband,
        meals_num_bride,
        present,
        present_price,
        present_num_husband,
        present_num_bride,
        reserve,
        reserve_pay
      );
      toast.error('빈 칸이 없도록 입력해주세요');
      return;
    }

    try {
      let reserve_husband = 0;
      let reserve_bride = 0;

      if (reserve === 'half') {
        reserve_husband = parseInt(reserve_pay) / 2;
        reserve_bride = parseInt(reserve_pay) / 2;
      } else if (reserve === 'husband') {
        reserve_husband = parseInt(reserve_pay);
        reserve_bride = 0;
      } else {
        reserve_husband = 0;
        reserve_bride = parseInt(reserve_pay) / 2;
      }

      let meal_husband = 0;
      let meal_bride = 0;

      if (meals === 'privacy') {
        meal_husband = parseInt(meals_price) * parseInt(meals_num_husband);
        meal_bride = parseInt(meals_price) * parseInt(meals_num_bride);
      } else if (meals === 'husband') {
        meal_husband =
          parseInt(meals_price) *
          (parseInt(meals_num_husband) + parseInt(meals_num_bride));
        meal_bride = 0;
      } else if (meals === 'bride') {
        meal_husband = 0;
        meal_bride =
          parseInt(meals_price) *
          (parseInt(meals_num_husband) + parseInt(meals_num_bride));
      } else {
        meal_husband =
          (parseInt(meals_price) *
            (parseInt(meals_num_husband) + parseInt(meals_num_bride))) /
          2;
        meal_bride =
          (parseInt(meals_price) *
            (parseInt(meals_num_husband) + parseInt(meals_num_bride))) /
          2;
      }

      let present_husband = 0;
      let present_bride = 0;

      if (present === 'privacy') {
        present_husband =
          parseInt(present_price) * parseInt(present_num_husband);
        present_bride = parseInt(present_price) * parseInt(present_num_bride);
      } else if (present === 'husband') {
        present_husband =
          parseInt(present_price) *
          (parseInt(present_num_husband) + parseInt(present_num_bride));
        present_bride = 0;
      } else if (present === 'bride') {
        present_husband = 0;
        present_bride =
          parseInt(present_price) *
          (parseInt(present_num_husband) + parseInt(present_num_bride));
      } else {
        present_husband =
          (parseInt(present_price) *
            (parseInt(present_num_husband) + parseInt(present_num_bride))) /
          2;
        present_bride =
          (parseInt(present_price) *
            (parseInt(present_num_husband) + parseInt(present_num_bride))) /
          2;
      }

      const response = await AddWedding({
        variables: {
          husband_name,
          bride_name,
          wedding_at: startDate.toLocaleDateString(),
          event_at,
          company_husband: parseInt(company_husband),
          company_bride: parseInt(company_bride),
          rooftop_husband: parseInt(rooftop_husband),
          rooftop_bride: parseInt(rooftop_bride),
          owner_woman_husband: parseInt(owner_woman_husband),
          owner_woman_bride: parseInt(owner_woman_bride),
          owner_man_husband: parseInt(owner_man_husband),
          owner_man_bride: parseInt(owner_man_bride),
          select_husband: parseInt(select_husband),
          select_bride: parseInt(select_bride),
          frame_husband: parseInt(frame_husband),
          frame_bride: parseInt(frame_bride),
          dress_husband: parseInt(dress_husband),
          dress_bride: parseInt(dress_bride),
          hairpin_husband: parseInt(hairpin_husband),
          hairpin_bride: parseInt(hairpin_bride),
          wig_husband: parseInt(wig_husband),
          wig_bride: parseInt(wig_bride),
          video_husband: parseInt(video_husband),
          video_bride: parseInt(video_bride),
          etc_husband: parseInt(etc_husband),
          etc_bride: parseInt(etc_bride),
          rental_husband: parseInt(rental_husband),
          rental_bride: parseInt(rental_bride),
          sword_husband: parseInt(sword_husband),
          sword_bride: parseInt(sword_bride),
          glove_husband: parseInt(glove_husband),
          glove_bride: parseInt(glove_bride),
          bouquet_husband: parseInt(bouquet_husband),
          bouquet_bride: parseInt(bouquet_bride),
          ceremony_husband: parseInt(ceremony_husband),
          ceremony_bride: parseInt(ceremony_bride),
          play_husband: parseInt(play_husband),
          play_bride: parseInt(play_bride),
          anthem_husband: parseInt(anthem_husband),
          anthem_bride: parseInt(anthem_bride),
          moderator_husband: parseInt(moderator_husband),
          moderator_bride: parseInt(moderator_bride),
          officiate_husband: parseInt(officiate_husband),
          officiate_bride: parseInt(officiate_bride),
          hanbok_pre_husband: parseInt(hanbok_pre_husband),
          hanbok_pre_bride: parseInt(hanbok_pre_bride),
          hanbok_post_husband: parseInt(hanbok_post_husband),
          hanbok_post_bride: parseInt(hanbok_post_bride),
          meals,
          meals_price: parseInt(meals_price),
          meals_num_husband: parseInt(meals_num_husband),
          meals_num_bride: parseInt(meals_num_bride),
          present,
          present_price: parseInt(present_price),
          present_num_husband: parseInt(present_num_husband),
          present_num_bride: parseInt(present_num_bride),
          reserve,
          reserve_pay: parseInt(reserve_pay),
          cost_husband:
            parseInt(rental_husband) +
            parseInt(sword_husband) +
            parseInt(glove_husband) +
            parseInt(bouquet_husband) +
            parseInt(ceremony_husband) +
            parseInt(company_husband) +
            parseInt(rooftop_husband) +
            parseInt(owner_woman_husband) +
            parseInt(owner_man_husband) +
            parseInt(select_husband) +
            parseInt(frame_husband) +
            parseInt(dress_husband) +
            parseInt(hairpin_husband) +
            parseInt(wig_husband) +
            parseInt(video_husband) +
            parseInt(etc_husband) +
            parseInt(play_husband) +
            parseInt(anthem_husband) +
            parseInt(moderator_husband) +
            parseInt(officiate_husband) +
            parseInt(hanbok_pre_husband) +
            parseInt(hanbok_post_husband),
          cost_bride:
            parseInt(rental_bride) +
            parseInt(sword_bride) +
            parseInt(glove_bride) +
            parseInt(bouquet_bride) +
            parseInt(ceremony_bride) +
            parseInt(company_bride) +
            parseInt(rooftop_bride) +
            parseInt(owner_woman_bride) +
            parseInt(owner_man_bride) +
            parseInt(select_bride) +
            parseInt(frame_bride) +
            parseInt(dress_bride) +
            parseInt(hairpin_bride) +
            parseInt(wig_bride) +
            parseInt(video_bride) +
            parseInt(etc_bride) +
            parseInt(play_bride) +
            parseInt(anthem_bride) +
            parseInt(moderator_bride) +
            parseInt(officiate_bride) +
            parseInt(hanbok_pre_bride) +
            parseInt(hanbok_post_bride),
          meal_husband,
          meal_bride,
          present_husband,
          present_bride,
          reserve_husband,
          reserve_bride,
        },
      });

      if (!response || !response.data) return;

      await client?.clearStore();

      toast.success('웨딩 빌지 전송!');
      history.push('/weddings');
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <ExpensiveTemplate>
      <ExpensiveWedding
        husband_name={husband_name}
        bride_name={bride_name}
        wedding_at={startDate}
        event_at={event_at}
        setStartDate={setStartDate}
        onChange={onChange}
      />
      <Convention
        rental_husband={rental_husband}
        rental_bride={rental_bride}
        sword_husband={sword_husband}
        sword_bride={sword_bride}
        glove_husband={glove_husband}
        glove_bride={glove_bride}
        bouquet_husband={bouquet_husband}
        bouquet_bride={bouquet_bride}
        ceremony_husband={ceremony_husband}
        ceremony_bride={ceremony_bride}
        onChange={onChange}
      />
      <Company
        company_husband={company_husband}
        company_bride={company_bride}
        rooftop_husband={rooftop_husband}
        rooftop_bride={rooftop_bride}
        owner_woman_husband={owner_woman_husband}
        owner_woman_bride={owner_woman_bride}
        owner_man_husband={owner_man_husband}
        owner_man_bride={owner_man_bride}
        select_husband={select_husband}
        select_bride={select_bride}
        frame_husband={frame_husband}
        frame_bride={frame_bride}
        dress_husband={dress_husband}
        dress_bride={dress_bride}
        hairpin_husband={hairpin_husband}
        hairpin_bride={hairpin_bride}
        wig_husband={wig_husband}
        wig_bride={wig_bride}
        video_husband={video_husband}
        video_bride={video_bride}
        etc_husband={etc_husband}
        etc_bride={etc_bride}
        onChange={onChange}
      />
      <Hanbok
        hanbok_pre_husband={hanbok_pre_husband}
        hanbok_pre_bride={hanbok_pre_bride}
        hanbok_post_husband={hanbok_post_husband}
        hanbok_post_bride={hanbok_post_bride}
        onChange={onChange}
      />
      <Event
        play_husband={play_husband}
        play_bride={play_bride}
        anthem_husband={anthem_husband}
        anthem_bride={anthem_bride}
        moderator_husband={moderator_husband}
        moderator_bride={moderator_bride}
        officiate_husband={officiate_husband}
        officiate_bride={officiate_bride}
        onChange={onChange}
      />
      <Meal
        meals={meals}
        meals_price={meals_price}
        meals_num_husband={meals_num_husband}
        meals_num_bride={meals_num_bride}
        onChange={onChange}
      />
      <Present
        present={present}
        present_price={present_price}
        present_num_husband={present_num_husband}
        present_num_bride={present_num_bride}
        onChange={onChange}
      />
      <Reserve
        reserve={reserve}
        reserve_pay={reserve_pay}
        onChange={onChange}
      />
      <ExpenseButton onBack={onBack} onSubmit={onSubmit} />
    </ExpensiveTemplate>
  );
}

export default ExpensiveWeddingContainer;