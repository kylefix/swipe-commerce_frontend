import { components as cart } from './Cart/default'
import { components as checkout } from './Checkout/default'
import { components as homepage } from './Homepage/default'
import { components as productDetail } from './ProductDetail/default'

import {
  Accordion,
  Advertisement,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Comment,
  Confirm,
  Container,
  Dimmer,
  Divider,
  Dropdown,
  Embed,
  Feed,
  Flag,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Item,
  Label,
  List,
  Loader,
  Menu,
  Message,
  Modal,
  Pagination,
  Popup,
  Progress,
  Radio,
  Rail,
  Rating,
  Ref,
  Responsive,
  Reveal,
  Search,
  Segment,
  Select,
  Sidebar,
  Statistic,
  Step,
  Sticky,
  Tab,
  Table,
  TabPane,
  TextArea,
  Transition,
  Visibility
} from 'semantic-ui-react'

import VisibilityProps from '../propTypes/Visibility.info.json'
import TransitionGroupProps from '../propTypes/TransitionGroup.info.json'
import TransitionProps from '../propTypes/Transition.info.json'
import TextAreaProps from '../propTypes/TextArea.info.json'
import TabPaneProps from '../propTypes/TabPane.info.json'
import TableRowProps from '../propTypes/TableRow.info.json'
import TableHeaderCellProps from '../propTypes/TableHeaderCell.info.json'
import TableHeaderProps from '../propTypes/TableHeader.info.json'
import TableFooterProps from '../propTypes/TableFooter.info.json'
import TableCellProps from '../propTypes/TableCell.info.json'
import TableBodyProps from '../propTypes/TableBody.info.json'
import TableProps from '../propTypes/Table.info.json'
import TabProps from '../propTypes/Tab.info.json'
import StickyProps from '../propTypes/Sticky.info.json'
import StepTitleProps from '../propTypes/StepTitle.info.json'
import StepGroupProps from '../propTypes/StepGroup.info.json'
import StepDescriptionProps from '../propTypes/StepDescription.info.json'
import StepContentProps from '../propTypes/StepContent.info.json'
import StepProps from '../propTypes/Step.info.json'
import StatisticValueProps from '../propTypes/StatisticValue.info.json'
import StatisticLabelProps from '../propTypes/StatisticLabel.info.json'
import StatisticGroupProps from '../propTypes/StatisticGroup.info.json'
import StatisticProps from '../propTypes/Statistic.info.json'
import SidebarPusherProps from '../propTypes/SidebarPusher.info.json'
import SidebarPushableProps from '../propTypes/SidebarPushable.info.json'
import SidebarProps from '../propTypes/Sidebar.info.json'
import SelectProps from '../propTypes/Select.info.json'
import SegmentGroupProps from '../propTypes/SegmentGroup.info.json'
import SegmentProps from '../propTypes/Segment.info.json'
import SearchResultsProps from '../propTypes/SearchResults.info.json'
import SearchResultProps from '../propTypes/SearchResult.info.json'
import SearchCategoryProps from '../propTypes/SearchCategory.info.json'
import SearchProps from '../propTypes/Search.info.json'
import RevealContentProps from '../propTypes/RevealContent.info.json'
import RevealProps from '../propTypes/Reveal.info.json'
import ResponsiveProps from '../propTypes/Responsive.info.json'
import RefProps from '../propTypes/Ref.info.json'
import RatingIconProps from '../propTypes/RatingIcon.info.json'
import RatingProps from '../propTypes/Rating.info.json'
import RailProps from '../propTypes/Rail.info.json'
import RadioProps from '../propTypes/Radio.info.json'
import ProgressProps from '../propTypes/Progress.info.json'
import PopupHeaderProps from '../propTypes/PopupHeader.info.json'
import PopupContentProps from '../propTypes/PopupContent.info.json'
import PopupProps from '../propTypes/Popup.info.json'
import PaginationItemProps from '../propTypes/PaginationItem.info.json'
import PaginationProps from '../propTypes/Pagination.info.json'
import MountNodeProps from '../propTypes/MountNode.info.json'
import ModalHeaderProps from '../propTypes/ModalHeader.info.json'
import ModalDescriptionProps from '../propTypes/ModalDescription.info.json'
import ModalContentProps from '../propTypes/ModalContent.info.json'
import ModalActionsProps from '../propTypes/ModalActions.info.json'
import ModalProps from '../propTypes/Modal.info.json'
import MessageListProps from '../propTypes/MessageList.info.json'
import MessageItemProps from '../propTypes/MessageItem.info.json'
import MessageHeaderProps from '../propTypes/MessageHeader.info.json'
import MessageContentProps from '../propTypes/MessageContent.info.json'
import MessageProps from '../propTypes/Message.info.json'
import MenuMenuProps from '../propTypes/MenuMenu.info.json'
import MenuItemProps from '../propTypes/MenuItem.info.json'
import MenuHeaderProps from '../propTypes/MenuHeader.info.json'
import MenuProps from '../propTypes/Menu.info.json'
import LoaderProps from '../propTypes/Loader.info.json'
import ListListProps from '../propTypes/ListList.info.json'
import ListItemProps from '../propTypes/ListItem.info.json'
import ListIconProps from '../propTypes/ListIcon.info.json'
import ListHeaderProps from '../propTypes/ListHeader.info.json'
import ListDescriptionProps from '../propTypes/ListDescription.info.json'
import ListContentProps from '../propTypes/ListContent.info.json'
import ListProps from '../propTypes/List.info.json'
import LabelGroupProps from '../propTypes/LabelGroup.info.json'
import LabelDetailProps from '../propTypes/LabelDetail.info.json'
import LabelProps from '../propTypes/Label.info.json'
import ItemMetaProps from '../propTypes/ItemMeta.info.json'
import ItemImageProps from '../propTypes/ItemImage.info.json'
import ItemHeaderProps from '../propTypes/ItemHeader.info.json'
import ItemGroupProps from '../propTypes/ItemGroup.info.json'
import ItemExtraProps from '../propTypes/ItemExtra.info.json'
import ItemDescriptionProps from '../propTypes/ItemDescription.info.json'
import ItemContentProps from '../propTypes/ItemContent.info.json'
import ItemProps from '../propTypes/Item.info.json'
import InputProps from '../propTypes/Input.info.json'
import ImageGroupProps from '../propTypes/ImageGroup.info.json'
import ImageProps from '../propTypes/Image.info.json'
import IconGroupProps from '../propTypes/IconGroup.info.json'
import IconProps from '../propTypes/Icon.info.json'
import HeaderSubheaderProps from '../propTypes/HeaderSubheader.info.json'
import HeaderContentProps from '../propTypes/HeaderContent.info.json'
import HeaderProps from '../propTypes/Header.info.json'
import GridRowProps from '../propTypes/GridRow.info.json'
import GridColumnProps from '../propTypes/GridColumn.info.json'
import GridProps from '../propTypes/Grid.info.json'
import FormTextAreaProps from '../propTypes/FormTextArea.info.json'
import FormSelectProps from '../propTypes/FormSelect.info.json'
import FormRadioProps from '../propTypes/FormRadio.info.json'
import FormInputProps from '../propTypes/FormInput.info.json'
import FormGroupProps from '../propTypes/FormGroup.info.json'
import FormFieldProps from '../propTypes/FormField.info.json'
import FormDropdownProps from '../propTypes/FormDropdown.info.json'
import FormCheckboxProps from '../propTypes/FormCheckbox.info.json'
import FormButtonProps from '../propTypes/FormButton.info.json'
import FormProps from '../propTypes/Form.info.json'
import FlagProps from '../propTypes/Flag.info.json'
import FeedUserProps from '../propTypes/FeedUser.info.json'
import FeedSummaryProps from '../propTypes/FeedSummary.info.json'
import FeedMetaProps from '../propTypes/FeedMeta.info.json'
import FeedLikeProps from '../propTypes/FeedLike.info.json'
import FeedLabelProps from '../propTypes/FeedLabel.info.json'
import FeedExtraProps from '../propTypes/FeedExtra.info.json'
import FeedEventProps from '../propTypes/FeedEvent.info.json'
import FeedDateProps from '../propTypes/FeedDate.info.json'
import FeedContentProps from '../propTypes/FeedContent.info.json'
import FeedProps from '../propTypes/Feed.info.json'
import EmbedProps from '../propTypes/Embed.info.json'
import DropdownSearchInputProps from '../propTypes/DropdownSearchInput.info.json'
import DropdownMenuProps from '../propTypes/DropdownMenu.info.json'
import DropdownItemProps from '../propTypes/DropdownItem.info.json'
import DropdownHeaderProps from '../propTypes/DropdownHeader.info.json'
import DropdownDividerProps from '../propTypes/DropdownDivider.info.json'
import DropdownProps from '../propTypes/Dropdown.info.json'
import DividerProps from '../propTypes/Divider.info.json'
import DimmerInnerProps from '../propTypes/DimmerInner.info.json'
import DimmerDimmableProps from '../propTypes/DimmerDimmable.info.json'
import DimmerProps from '../propTypes/Dimmer.info.json'
import ContainerProps from '../propTypes/Container.info.json'
import ConfirmProps from '../propTypes/Confirm.info.json'
import CommentTextProps from '../propTypes/CommentText.info.json'
import CommentMetadataProps from '../propTypes/CommentMetadata.info.json'
import CommentGroupProps from '../propTypes/CommentGroup.info.json'
import CommentContentProps from '../propTypes/CommentContent.info.json'
import CommentAvatarProps from '../propTypes/CommentAvatar.info.json'
import CommentAuthorProps from '../propTypes/CommentAuthor.info.json'
import CommentActionsProps from '../propTypes/CommentActions.info.json'
import CommentActionProps from '../propTypes/CommentAction.info.json'
import CommentProps from '../propTypes/Comment.info.json'
import CheckboxProps from '../propTypes/Checkbox.info.json'
import CardMetaProps from '../propTypes/CardMeta.info.json'
import CardHeaderProps from '../propTypes/CardHeader.info.json'
import CardGroupProps from '../propTypes/CardGroup.info.json'
import CardDescriptionProps from '../propTypes/CardDescription.info.json'
import CardContentProps from '../propTypes/CardContent.info.json'
import CardProps from '../propTypes/Card.info.json'
import ButtonOrProps from '../propTypes/ButtonOr.info.json'
import ButtonGroupProps from '../propTypes/ButtonGroup.info.json'
import ButtonContentProps from '../propTypes/ButtonContent.info.json'
import ButtonProps from '../propTypes/Button.info.json'
import BreadcrumbSectionProps from '../propTypes/BreadcrumbSection.info.json'
import BreadcrumbDividerProps from '../propTypes/BreadcrumbDivider.info.json'
import BreadcrumbProps from '../propTypes/Breadcrumb.info.json'
import AdvertisementProps from '../propTypes/Advertisement.info.json'
import AccordionTitleProps from '../propTypes/AccordionTitle.info.json'
import AccordionPanelProps from '../propTypes/AccordionPanel.info.json'
import AccordionContentProps from '../propTypes/AccordionContent.info.json'
import AccordionAccordionProps from '../propTypes/AccordionAccordion.info.json'
import AccordionProps from '../propTypes/Accordion.info.json'
Accordion.propList = AccordionProps
Accordion.Accordion.propList = AccordionAccordionProps
Accordion.Content.propList = AccordionContentProps
Accordion.Panel.propList = AccordionPanelProps
Accordion.Title.propList = AccordionTitleProps
Advertisement.propList = AdvertisementProps
Breadcrumb.propList = BreadcrumbProps
Breadcrumb.Divider.propList = BreadcrumbDividerProps
Breadcrumb.Section.propList = BreadcrumbSectionProps
Button.propList = ButtonProps
Button.Content.propList = ButtonContentProps
Button.Group.propList = ButtonGroupProps
Button.Or.propList = ButtonOrProps
Card.propList = CardProps
Card.Content.propList = CardContentProps
Card.Description.propList = CardDescriptionProps
Card.Group.propList = CardGroupProps
Card.Header.propList = CardHeaderProps
Card.Meta.propList = CardMetaProps
Checkbox.propList = CheckboxProps
Comment.propList = CommentProps
Comment.Action.propList = CommentActionProps
Comment.Actions.propList = CommentActionsProps
Comment.Author.propList = CommentAuthorProps
Comment.Avatar.propList = CommentAvatarProps
Comment.Content.propList = CommentContentProps
Comment.Group.propList = CommentGroupProps
Comment.Metadata.propList = CommentMetadataProps
Comment.Text.propList = CommentTextProps
Confirm.propList = ConfirmProps
Container.propList = ContainerProps
Dimmer.propList = DimmerProps
Dimmer.Dimmable.propList = DimmerDimmableProps
Dimmer.Inner.propList = DimmerInnerProps
Divider.propList = DividerProps
Dropdown.propList = DropdownProps
Dropdown.Divider.propList = DropdownDividerProps
Dropdown.Header.propList = DropdownHeaderProps
Dropdown.Item.propList = DropdownItemProps
Dropdown.Menu.propList = DropdownMenuProps
Dropdown.SearchInput.propList = DropdownSearchInputProps
Embed.propList = EmbedProps
Feed.propList = FeedProps
Feed.Content.propList = FeedContentProps
Feed.Date.propList = FeedDateProps
Feed.Event.propList = FeedEventProps
Feed.Extra.propList = FeedExtraProps
Feed.Label.propList = FeedLabelProps
Feed.Like.propList = FeedLikeProps
Feed.Meta.propList = FeedMetaProps
Feed.Summary.propList = FeedSummaryProps
Feed.User.propList = FeedUserProps
Flag.propList = FlagProps
Form.propList = FormProps
Form.Button.propList = FormButtonProps
Form.Checkbox.propList = FormCheckboxProps
Form.Dropdown.propList = FormDropdownProps
Form.Field.propList = FormFieldProps
Form.Group.propList = FormGroupProps
Form.Input.propList = FormInputProps
Form.Radio.propList = FormRadioProps
Form.Select.propList = FormSelectProps
Form.TextArea.propList = FormTextAreaProps
Grid.propList = GridProps
Grid.Column.propList = GridColumnProps
Grid.Row.propList = GridRowProps
Header.propList = HeaderProps
Header.Content.propList = HeaderContentProps
Header.Subheader.propList = HeaderSubheaderProps
Icon.propList = IconProps
Icon.Group.propList = IconGroupProps
Image.propList = ImageProps
Image.Group.propList = ImageGroupProps
Input.propList = InputProps
Item.propList = ItemProps
Item.Content.propList = ItemContentProps
Item.Description.propList = ItemDescriptionProps
Item.Extra.propList = ItemExtraProps
Item.Group.propList = ItemGroupProps
Item.Header.propList = ItemHeaderProps
Item.Image.propList = ItemImageProps
Item.Meta.propList = ItemMetaProps
Label.propList = LabelProps
Label.Detail.propList = LabelDetailProps
Label.Group.propList = LabelGroupProps
List.propList = ListProps
List.Content.propList = ListContentProps
List.Description.propList = ListDescriptionProps
List.Header.propList = ListHeaderProps
List.Icon.propList = ListIconProps
List.Item.propList = ListItemProps
List.List.propList = ListListProps
Loader.propList = LoaderProps
Menu.propList = MenuProps
Menu.Header.propList = MenuHeaderProps
Menu.Item.propList = MenuItemProps
Menu.Menu.propList = MenuMenuProps
Message.propList = MessageProps
Message.Content.propList = MessageContentProps
Message.Header.propList = MessageHeaderProps
Message.Item.propList = MessageItemProps
Message.List.propList = MessageListProps
Modal.propList = ModalProps
Modal.Actions.propList = ModalActionsProps
Modal.Content.propList = ModalContentProps
Modal.Description.propList = ModalDescriptionProps
Modal.Header.propList = ModalHeaderProps
Pagination.propList = PaginationProps
Pagination.Item.propList = PaginationItemProps
Popup.propList = PopupProps
Popup.Content.propList = PopupContentProps
Popup.Header.propList = PopupHeaderProps
Progress.propList = ProgressProps
Radio.propList = RadioProps
Rail.propList = RailProps
Rating.propList = RatingProps
Rating.Icon.propList = RatingIconProps
Ref.propList = RefProps
Responsive.propList = ResponsiveProps
Reveal.propList = RevealProps
Reveal.Content.propList = RevealContentProps
Search.propList = SearchProps
Search.Category.propList = SearchCategoryProps
Search.Result.propList = SearchResultProps
Search.Results.propList = SearchResultsProps
Segment.propList = SegmentProps
Segment.Group.propList = SegmentGroupProps
Select.propList = SelectProps
Sidebar.propList = SidebarProps
Sidebar.Pushable.propList = SidebarPushableProps
Sidebar.Pusher.propList = SidebarPusherProps
Statistic.propList = StatisticProps
Statistic.Group.propList = StatisticGroupProps
Statistic.Label.propList = StatisticLabelProps
Statistic.Value.propList = StatisticValueProps
Step.propList = StepProps
Step.Content.propList = StepContentProps
Step.Description.propList = StepDescriptionProps
Step.Group.propList = StepGroupProps
Step.Title.propList = StepTitleProps
Sticky.propList = StickyProps
Tab.propList = TabProps
Table.propList = TableProps
Table.Body.propList = TableBodyProps
Table.Cell.propList = TableCellProps
Table.Footer.propList = TableFooterProps
Table.Header.propList = TableHeaderProps
Table.HeaderCell.propList = TableHeaderCellProps
Table.Row.propList = TableRowProps
TabPane.propList = TabPaneProps
TextArea.propList = TextAreaProps
Transition.propList = TransitionProps
Transition.Group.propList = TransitionGroupProps
Visibility.propList = VisibilityProps

const semantic = {
  Accordion: Accordion,
  'Accordion.Accordion': Accordion.Accordion,
  'Accordion.Content': Accordion.Content,
  'Accordion.Panel': Accordion.Panel,
  'Accordion.Title': Accordion.Title,
  Advertisement: Advertisement,
  Breadcrumb: Breadcrumb,
  'Breadcrumb.Divider': Breadcrumb.Divider,
  'Breadcrumb.Section': Breadcrumb.Section,
  Button: Button,
  'Button.Content': Button.Content,
  'Button.Group': Button.Group,
  'Button.Or': Button.Or,
  Card: Card,
  'Card.Content': Card.Content,
  'Card.Description': Card.Description,
  'Card.Group': Card.Group,
  'Card.Header': Card.Header,
  'Card.Meta': Card.Meta,
  Checkbox: Checkbox,
  Comment: Comment,
  'Comment.Action': Comment.Action,
  'Comment.Actions': Comment.Actions,
  'Comment.Author': Comment.Author,
  'Comment.Avatar': Comment.Avatar,
  'Comment.Content': Comment.Content,
  'Comment.Group': Comment.Group,
  'Comment.Metadata': Comment.Metadata,
  'Comment.Text': Comment.Text,
  Confirm: Confirm,
  Container: Container,
  Dimmer: Dimmer,
  'Dimmer.Dimmable': Dimmer.Dimmable,
  'Dimmer.Inner': Dimmer.Inner,
  Divider: Divider,
  Dropdown: Dropdown,
  'Dropdown.Divider': Dropdown.Divider,
  'Dropdown.Header': Dropdown.Header,
  'Dropdown.Item': Dropdown.Item,
  'Dropdown.Menu': Dropdown.Menu,
  'Dropdown.SearchInput': Dropdown.SearchInput,
  Embed: Embed,
  Feed: Feed,
  'Feed.Content': Feed.Content,
  'Feed.Date': Feed.Date,
  'Feed.Event': Feed.Event,
  'Feed.Extra': Feed.Extra,
  'Feed.Label': Feed.Label,
  'Feed.Like': Feed.Like,
  'Feed.Meta': Feed.Meta,
  'Feed.Summary': Feed.Summary,
  'Feed.User': Feed.User,
  Flag: Flag,
  Form: Form,
  'Form.Button': Form.Button,
  'Form.Checkbox': Form.Checkbox,
  'Form.Dropdown': Form.Dropdown,
  'Form.Field': Form.Field,
  'Form.Group': Form.Group,
  'Form.Input': Form.Input,
  'Form.Radio': Form.Radio,
  'Form.Select': Form.Select,
  'Form.TextArea': Form.TextArea,
  Grid: Grid,
  'Grid.Column': Grid.Column,
  'Grid.Row': Grid.Row,
  Header: Header,
  'Header.Content': Header.Content,
  'Header.Subheader': Header.Subheader,
  Icon: Icon,
  'Icon.Group': Icon.Group,
  Image: Image,
  'Image.Group': Image.Group,
  Input: Input,
  Item: Item,
  'Item.Content': Item.Content,
  'Item.Description': Item.Description,
  'Item.Extra': Item.Extra,
  'Item.Group': Item.Group,
  'Item.Header': Item.Header,
  'Item.Image': Item.Image,
  'Item.Meta': Item.Meta,
  Label: Label,
  'Label.Detail': Label.Detail,
  'Label.Group': Label.Group,
  List: List,
  'List.Content': List.Content,
  'List.Description': List.Description,
  'List.Header': List.Header,
  'List.Icon': List.Icon,
  'List.Item': List.Item,
  'List.List': List.List,
  Loader: Loader,
  Menu: Menu,
  'Menu.Header': Menu.Header,
  'Menu.Item': Menu.Item,
  'Menu.Menu': Menu.Menu,
  Message: Message,
  'Message.Content': Message.Content,
  'Message.Header': Message.Header,
  'Message.Item': Message.Item,
  'Message.List': Message.List,
  Modal: Modal,
  'Modal.Actions': Modal.Actions,
  'Modal.Content': Modal.Content,
  'Modal.Description': Modal.Description,
  'Modal.Header': Modal.Header,
  Pagination: Pagination,
  'Pagination.Item': Pagination.Item,
  Popup: Popup,
  'Popup.Content': Popup.Content,
  'Popup.Header': Popup.Header,
  Progress: Progress,
  Radio: Radio,
  Rail: Rail,
  Rating: Rating,
  'Rating.Icon': Rating.Icon,
  Ref: Ref,
  Responsive: Responsive,
  Reveal: Reveal,
  'Reveal.Content': Reveal.Content,
  Search: Search,
  'Search.Category': Search.Category,
  'Search.Result': Search.Result,
  'Search.Results': Search.Results,
  Segment: Segment,
  'Segment.Group': Segment.Group,
  Select: Select,
  Sidebar: Sidebar,
  'Sidebar.Pushable': Sidebar.Pushable,
  'Sidebar.Pusher': Sidebar.Pusher,
  Statistic: Statistic,
  'Statistic.Group': Statistic.Group,
  'Statistic.Label': Statistic.Label,
  'Statistic.Value': Statistic.Value,
  Step: Step,
  'Step.Content': Step.Content,
  'Step.Description': Step.Description,
  'Step.Group': Step.Group,
  'Step.Title': Step.Title,
  Sticky: Sticky,
  Tab: Tab,
  Table: Table,
  'Table.Body': Table.Body,
  'Table.Cell': Table.Cell,
  'Table.Footer': Table.Footer,
  'Table.Header': Table.Header,
  'Table.HeaderCell': Table.HeaderCell,
  'Table.Row': Table.Row,
  TabPane: TabPane,
  TextArea: TextArea,
  Transition: Transition,
  'Transition.Group': Transition.Group,
  Visibility: Visibility
}

export default {
  semantic,
  cart,
  checkout,
  homepage,
  productDetail
}
