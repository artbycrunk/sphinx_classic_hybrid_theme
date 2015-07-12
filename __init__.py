"""Sphinx Classic Hybrid theme. """
import os

VERSION = (0, 0, 2)

__version__ = ".".join(str(v) for v in VERSION)
__version_full__ = __version__


def get_path():
    """Return list of HTML theme paths."""
    cur_dir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    return cur_dir

try:
    from pygments.style import Style
    from pygments.styles.friendly import FriendlyStyle
    from pygments.token import Generic, Comment, Number, Whitespace, Keyword, \
        Operator, Name, String, Error

    class HybridStyle(Style):
        """
        Like friendly, but a bit darker to enhance contrast on the green
        background.
        """

        background_color = '#eeffcc'
        default_style = ''

        styles = FriendlyStyle.styles
        styles.update({
            Generic.Output: '#ABABAB',
            Comment: 'italic #408090',
            Number: '#208050',
        })
except:
    pass