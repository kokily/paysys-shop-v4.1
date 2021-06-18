import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { READ_WEDDING, UPDATE_WEDDING } from '../../libs/graphql/weddings';
import { toast } from 'react-toastify';
import ExpensiveTemplate from '../../components/weddings/expensive/common/ExpensiveTemplate';
import ExpensiveWedding from '../../components/weddings/expensive';
import Convention from '../../components/weddings/expensive/Convention';
import Company from '../../components/weddings/expensive/Company';
import Hanbok from '../../components/weddings/expensive/Hanbok';
import Event from '../../components/weddings/expensive/Event';
import Meal from '../../components/weddings/expensive/Meal';
import Present from '../../components/weddings/expensive/Present';
import Reserve from '../../components/weddings/expensive/Reserve';
import ExpenseButton from '../../components/weddings/expensive/ExpenseButton';

function UpdateWeddingContainer() {
  const history = useHistory();
  const { weddingId }: { weddingId: string } = useParams();
  const { data, loading, error } = useQuery<{
    ReadWedding: {
      wedding: WeddingType;

      convention: ConventionType;
      company: CompanyType;
      event: EventType;
      hanbok: HanbokType;
      meal: MealType;
      present: PresentType;
      reserve: ReserveType;
    };
  }>(READ_WEDDING, {
    variables: { id: weddingId },
  });
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
  const [UpdateWeddingResolver, { client }] = useMutation(UPDATE_WEDDING);

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
        reserve_bride = parseInt(reserve_pay);
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

      const response = await UpdateWeddingResolver({
        variables: {
          id: weddingId,
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

  const onBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (
      data?.ReadWedding.wedding &&
      data.ReadWedding.convention &&
      data.ReadWedding.company &&
      data.ReadWedding.event &&
      data.ReadWedding.hanbok &&
      data.ReadWedding.meal &&
      data.ReadWedding.present &&
      data.ReadWedding.reserve
    ) {
      setInputs({
        husband_name: data.ReadWedding.wedding.husband_name,
        bride_name: data.ReadWedding.wedding.bride_name,
        event_at: data.ReadWedding.wedding.event_at,
        company_husband: data.ReadWedding.company.company_husband.toString(),
        company_bride: data.ReadWedding.company.company_bride.toString(),
        rooftop_husband: data.ReadWedding.company.rooftop_husband.toString(),
        rooftop_bride: data.ReadWedding.company.rooftop_bride.toString(),
        owner_woman_husband:
          data.ReadWedding.company.owner_woman_husband.toString(),
        owner_woman_bride:
          data.ReadWedding.company.owner_woman_bride.toString(),
        owner_man_husband:
          data.ReadWedding.company.owner_man_husband.toString(),
        owner_man_bride: data.ReadWedding.company.owner_man_bride.toString(),
        select_husband: data.ReadWedding.company.select_husband.toString(),
        select_bride: data.ReadWedding.company.select_bride.toString(),
        frame_husband: data.ReadWedding.company.frame_husband.toString(),
        frame_bride: data.ReadWedding.company.frame_bride.toString(),
        dress_husband: data.ReadWedding.company.dress_husband.toString(),
        dress_bride: data.ReadWedding.company.dress_bride.toString(),
        hairpin_husband: data.ReadWedding.company.hairpin_husband.toString(),
        hairpin_bride: data.ReadWedding.company.hairpin_bride.toString(),
        wig_husband: data.ReadWedding.company.wig_husband.toString(),
        wig_bride: data.ReadWedding.company.wig_bride.toString(),
        video_husband: data.ReadWedding.company.video_husband.toString(),
        video_bride: data.ReadWedding.company.video_bride.toString(),
        etc_husband: data.ReadWedding.company.etc_husband.toString(),
        etc_bride: data.ReadWedding.company.etc_bride.toString(),
        rental_husband: data.ReadWedding.convention.rental_husband.toString(),
        rental_bride: data.ReadWedding.convention.rental_bride.toString(),
        sword_husband: data.ReadWedding.convention.sword_husband.toString(),
        sword_bride: data.ReadWedding.convention.sword_bride.toString(),
        glove_husband: data.ReadWedding.convention.glove_husband.toString(),
        glove_bride: data.ReadWedding.convention.glove_bride.toString(),
        bouquet_husband: data.ReadWedding.convention.bouquet_husband.toString(),
        bouquet_bride: data.ReadWedding.convention.bouquet_bride.toString(),
        ceremony_husband:
          data.ReadWedding.convention.ceremony_husband.toString(),
        ceremony_bride: data.ReadWedding.convention.ceremony_bride.toString(),
        play_husband: data.ReadWedding.event.play_husband.toString(),
        play_bride: data.ReadWedding.event.play_bride.toString(),
        anthem_husband: data.ReadWedding.event.anthem_husband.toString(),
        anthem_bride: data.ReadWedding.event.anthem_bride.toString(),
        moderator_husband: data.ReadWedding.event.moderator_husband.toString(),
        moderator_bride: data.ReadWedding.event.moderator_bride.toString(),
        officiate_husband: data.ReadWedding.event.officiate_husband.toString(),
        officiate_bride: data.ReadWedding.event.officiate_bride.toString(),
        hanbok_pre_husband:
          data.ReadWedding.hanbok.hanbok_pre_husband.toString(),
        hanbok_pre_bride: data.ReadWedding.hanbok.hanbok_pre_bride.toString(),
        hanbok_post_husband:
          data.ReadWedding.hanbok.hanbok_post_husband.toString(),
        hanbok_post_bride: data.ReadWedding.hanbok.hanbok_post_bride.toString(),
        meals: data.ReadWedding.meal.meals,
        meals_price: data.ReadWedding.meal.meals_price.toString(),
        meals_num_husband: data.ReadWedding.meal.meals_num_husband.toString(),
        meals_num_bride: data.ReadWedding.meal.meals_num_bride.toString(),
        present: data.ReadWedding.present.present,
        present_price: data.ReadWedding.present.present_price.toString(),
        present_num_husband:
          data.ReadWedding.present.present_num_husband.toString(),
        present_num_bride:
          data.ReadWedding.present.present_num_bride.toString(),
        reserve: data.ReadWedding.reserve.reserve,
        reserve_pay: data.ReadWedding.reserve.reserve_pay.toString(),
      });
    }
  }, [data]);

  if (loading) return null;
  if (error) return null;

  return <ExpensiveTemplate></ExpensiveTemplate>;
}

export default UpdateWeddingContainer;
